import MainTab from "@/components/MainTab";
import Background from "@/components/Background";
import styles from "@/styles/challenge.module.scss";
import credit from '@/assets/credit.svg'
import fire from '@/assets/fire.svg'
import vector from '@/assets/vector.svg'
import { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ChallengeHBS from "@/pages/challenge/ChallengeHBS";
import { useSetRecoilState } from "recoil";
import { bottomSheetState } from "@/store/challengeState";
import { createToast } from "@/utils/ToastUtils";

const Challenge = () => {
  const intervalId = useRef(0);
  const setBottomIsOpen = useSetRecoilState(bottomSheetState);
  const [hour, setHour] = useState(0);
  const [participated, setParticipated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date();
      const nextDay = new Date(now);
      nextDay.setDate(now.getDate() + 1);
      nextDay.setHours(0, 0, 0, 0);

      let diffInMs = nextDay.getTime() - now.getTime();
      let diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));

      setHour(diffInHours);

      if (diffInHours === 24) {
        setParticipated(false);
      }
    };
    setTimeout(() => {
      calculateTime();

      intervalId.current = window.setInterval(calculateTime, 60000);
    }, 1000);

    return () => {
      if (intervalId.current) window.clearInterval(intervalId.current);
    };
  }, []);

  const wrong = () => createToast("error", "추후 오픈 예정입니다");

  return (
    <>
      <Background>
        <div className={styles.mainHead}>
          <span>챌린지</span>
        </div>
        <div className={styles.name}>
          <div className={styles.img}></div>
          <div className={styles.nickname}>닉네임</div>
          <div className={styles.petname}>꿍이집사</div>
          <div className={styles.date}> 23.03.06</div>
        </div>
        <div className={styles.credit}>
          1220 크레딧
          <img src={credit} alt="credit" />
        </div>

        <div className={styles.shop}>
          <div className={styles.container}>
            <Link to="/pointshop" className={styles.button}>
              포인트샵 가기
            </Link>
            <span>|</span>
            <button className={styles.button_right} onClick={wrong}>
              포인트 사용 내역
            </button>
          </div>
        </div>

        <div className={styles.event}>
          <div className={styles.head}>
            <span>이벤트 챌린지</span>
          </div>
          <div className={styles.body}>
            <div className={styles.section}>
              <div className={styles.img} onClick={() => navigate("/contest")}>
                asd
              </div>
              <div className={styles.text}>
                <Link to="/contest" className={styles.title}>
                  랜선대회 챌린지
                </Link>
                <div className={styles.subtitle}>카드 디자인 서브 타이틀</div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.daily_head}>
          <div className={styles.left_item}>
            <img src={fire} alt="fire" />
            <span className={styles.head}>데일리 챌린지</span>
          </div>
          <div className={styles.sort}>24시간마다 초기화</div>
        </div>
        <div className={styles.daily_body}>
          <div className={styles.challenge}>
            <div className={styles.img}></div>
            <div className={styles.main}>
              <div className={styles.title}>대규모 챌린지</div>
              <div className={styles.time}>
                <div className={styles.vectorWrapper}>
                  <img src={vector} alt="vector" style={{marginRight:'6px'}}/> 
                  <div className={styles.square}></div>
                </div>
                {hour}시간 후{" "}
              </div>
            </div>
            {/* f5시 참여완료를 참여하기로 바뀌지 않게 하려면 백엔드 필요  */}
            {participated ? (
              <button
                className={styles.participate_off}
                onClick={() => setParticipated(false)}
                disabled
              >
                참여완료
              </button>
            ) : (
              <button
                className={styles.participate_on}
                onClick={() => setParticipated(true)}
              >
                참여하기
              </button>
            )}
          </div>
        </div>

        <div className={styles.bonus}>
          <div className={styles.title}>추가 보너스 받기</div>
          <button
            className={styles.button}
            onClick={() => setBottomIsOpen(true)}
          >
            보너스 받기
          </button>
        </div>
        <ChallengeHBS />
        <MainTab />
      </Background>
    </>
  );
};
export default Challenge;

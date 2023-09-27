import MainTab from "@/components/MainTab";
import Background from "@/components/Background";
import styles from "@/styles/challenge.module.scss";
import fire from "@/assets/fire.svg";
import Voting from "@/assets/Voting.svg";
import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ChallengeHBS from "@/pages/challenge/ChallengeHBS";
import Header from "@/components/Head";
import ChallengeProfile from "@/components/challenge/ChallengeProfile";
import ChallengeEventList from "@/components/ChallengeEventList";
import { useSetRecoilState } from "recoil";
import { bottomSheetState } from "@/store/challengeState";
import { createToast } from "@/utils/ToastUtils";

const Challenge = () => {
  const intervalId = useRef(0);
  const setBottomIsOpen = useSetRecoilState(bottomSheetState);
  const [hour, setHour] = useState(0);
  const [challenges, setChallenges] = useState<DailyAllList[]>([]);
  const [cheonHa, setCheonHa] = useState<EventChallenge>();
  const [yanado, setYanado] = useState<EventChallenge>();
  const navigate = useNavigate();

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date();
      const nextDay = new Date(now);
      nextDay.setDate(now.getDate() + 1);
      nextDay.setHours(0, 0, 0, 0);

      const diffInMs = nextDay.getTime() - now.getTime();
      const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
      setHour(diffInHours);
    };
    setTimeout(() => {
      calculateTime();
      intervalId.current = window.setInterval(calculateTime, 60000);
    }, 1000);
    return () => {
      if (intervalId.current) window.clearInterval(intervalId.current);
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/DailyAllList.json");
      const data = await response.json();
      setChallenges(data.challenges);
      const response2 = await fetch("/Cheonha.json");
      const data2 = await response2.json();
      setCheonHa(data2);
      const response3 = await fetch("/Yanado.json");
      const data3 = await response3.json();
      setYanado(data3);
    };
    fetchData();
  }, []);

  const wrong = () => createToast("error", "추후 오픈 예정입니다");

  return (
    <>
      <Background>
        <Header>
          <span>챌린지</span>
        </Header>
        <ChallengeProfile />

        <div className={styles.shop}>
          <div className={styles.container}>
            <div
              className={styles.button}
              onClick={() => navigate("/pointshop")}
            >
              포인트샵 가기
            </div>
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
            <ChallengeEventList item={cheonHa} path="/contest" />
            <ChallengeEventList item={yanado} path="/ecyanado" />
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
            {challenges.map((challengeData) => (
              <div key={challengeData.challengeId} className={styles.key}>
                <img
                  className={styles.img}
                  src={challengeData.thumbnail}
                  alt="섬네일"
                  onClick={() =>
                    navigate(`/dailychallenge${challengeData.challengeId}`)
                  }
                />
                <div
                  className={styles.main}
                  onClick={() =>
                    navigate(`/dailychallenge${challengeData.challengeId}`)
                  }
                >
                  <div className={styles.title}>{challengeData.title}</div>
                  <div className={styles.time}>
                    <img
                      src={Voting}
                      alt="Voting"
                      style={{ marginRight: "6px" }}
                    />
                    {hour}시간 후
                  </div>
                </div>

                {challengeData.status ? (
                  <button className={styles.participate_off} disabled> 지급완료 </button>
                ) : (
                  <button 
                    className={styles.participate_on}
                    onClick={() =>
                      navigate(`/dailychallenge${challengeData.challengeId}`)
                    }>참여하기</button>
                )}
              </div>
            ))}
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
        <MainTab />
        <ChallengeHBS />
      </Background>
    </>
  );
};
export default Challenge;

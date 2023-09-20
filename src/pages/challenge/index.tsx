import MainTab from "@/components/MainTab";
import Background from "@/components/Background";
import styles from "@/styles/challenge.module.scss";
import fire from "@/assets/fire.svg";
import vector from "@/assets/vector.svg";
import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ChallengeHBS from "@/pages/challenge/ChallengeHBS";
import Header from '@/components/Head'
import ChallengeProfile from "@/components/challenge/ChallengeProfile";
import ChallengeEventList from "@/components/ChallengeEventList";
import { useSetRecoilState } from "recoil";
import { bottomSheetState } from "@/store/challengeState";
import { createToast } from "@/utils/ToastUtils";


const Challenge = () => {
  const intervalId = useRef(0);
  const setBottomIsOpen = useSetRecoilState(bottomSheetState);
  const [hour, setHour] = useState(0);
  const [participated, setParticipated] = useState<{[key: number]: boolean}>({});
  const [challenges, setChallenges] = useState<ChallengeData[]>([]);
  const [cheonHa, setCheonHa] = useState<EventChallengeData>();
  const [yanado, setYanado] = useState<EventChallengeData>();
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
      if (diffInHours === 24) {
        setParticipated({});
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

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/Daily.json');
      const data = await response.json();
      setChallenges(data.data);
      const response2 = await fetch('/Cheonha.json');
      const data2 = await response2.json();
      setCheonHa(data2.data[0]);
      const response3 = await fetch('/Yanado.json');
      const data3 = await response3.json();
      setYanado(data3.data[0]);
    };
    fetchData();
   }, []);

  const wrong = () => createToast("error", "추후 오픈 예정입니다");

  return (
    <>
      <Background>
        <Header>
          <div className={styles.mainHead}>
            <span>챌린지</span>
          </div>
        </Header>
        <ChallengeProfile/>

        <div className={styles.shop}>
          <div className={styles.container}>
            <div className={styles.button} onClick={()=>navigate('/pointshop')}>
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
            <ChallengeEventList item={cheonHa} path="/contest"/>
            <ChallengeEventList item={yanado} path="/ecyanado"/>
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
            {challenges.map(challengeData => (
              <div key={challengeData.challengeId} className={styles.key}>
                <img 
                className={styles.img}
                src={challengeData.thumbnail} 
                alt="섬네일"
                onClick={()=>navigate(`/dailychallenge${challengeData.challengeId}`)}
                  />
                <div 
                className={styles.main}
                onClick={()=>navigate(`/dailychallenge${challengeData.challengeId}`)}>
                  <div className={styles.title}>{challengeData.challengeName}</div>
                  <div className={styles.time}>
                    <div className={styles.vectorWrapper}>
                      <img src={vector} alt="vector" style={{marginRight:'6px'}}/> 
                      <div className={styles.square}></div>
                    </div>
                    {hour}시간 후
                  </div>
                </div>

                {/* f5시 참여완료를 참여하기로 바뀌지 않게 하려면 백엔드 필요  */}
                {participated[challengeData.challengeId] ? (
                  <button
                    className={styles.participate_off}
                    onClick={() => 
                      setParticipated(prevParticipation => 
                        ({...prevParticipation,[challengeData.challengeId]: false}))}
                    disabled
                  >
                    지급완료
                  </button>
                ) : (
                  <button
                    className={styles.participate_on}
                    onClick={() =>
                      setParticipated(prevParticipation => 
                        ({...prevParticipation,[challengeData.challengeId]: true}))}
                  >
                    참여하기
                  </button>
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

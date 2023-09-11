import MainTab from "@/components/MainTab";
import Background from "@/components/Background";
import styles from '@/styles/challenge.module.scss'
import { useRef } from "react";
import fireImage from '/fire.png'
import creditImage from '/credit.png'
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { FiRotateCcw } from 'react-icons/fi'
import ChallengeHBS from "@/components/BottomSheet/ChallengeHBS";
import { useSetRecoilState } from 'recoil'
import { bottomSheetState } from "@/store";

const Challenge = () => {
  const scrollRef = useRef(null);
  const setBottomIsOpen = useSetRecoilState(bottomSheetState);

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (!scrollRef.current) return;
    if (e.deltaY === 0) return;
  
    e.preventDefault();
    const current = scrollRef.current as HTMLDivElement;
    current.scrollLeft += e.deltaY;
  };

  return (
    <>
      <Background>
        <div className={styles.head}>
          <span>챌린지</span>
        </div>
        <div className={styles.name}>
          <div className={styles.img}></div>
          <div className={styles.title}>꿍이집사 펫고수</div>
        </div>
        <div className={styles.credit}>
         1220 크레딧 
         <img src={creditImage} alt="credit" />
        </div>

        <div className={styles.shop}>
          <div className={styles.container}>
            <button className={styles.button}>포인트샵 가기</button>
            <span>|</span>
            <button className={styles.button}>구매내역 보기</button>
          </div>
        </div>

        <div className={styles.event}>
          <div className={styles.head}>
            <span>이벤트 챌린지</span>
          </div>
          <div 
          className={styles.body} 
          ref={scrollRef}
          onWheel={handleWheel}>
            <div className={styles.section}>
              <div className={styles.img}></div>
              <div className={styles.text}>
                <div className={styles.title}>랜선대회 챌린지</div>
                <div className={styles.subtitle}>카드 디자인 서브 타이틀</div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.daily_head}>
          <div className={styles.left_item}>
            <img src={fireImage} alt="fire" />
            <span className={styles.head}>데일리 챌린지</span>
          </div>
          <div className={styles.sort}>최신순 <IoIosArrowDown/></div>
        </div>
        <div className={styles.daily_body}>
          <div className={styles.challenge}>
            <div className={styles.img}></div>
            <div className={styles.main}>
              <div className={styles.title}>대규모 챌린지</div> 
              <div className={styles.time}><FiRotateCcw/> 6시간 후 </div>
            </div>
            <div className={styles.participate}>참여하기 <IoIosArrowForward/></div>
          </div>
        </div>
        <div className={styles.bonus}>
          <div className={styles.title}>추가 보너스 받기</div>
          <button className={styles.button} onClick={() => setBottomIsOpen(true)}>보너스 받기 버튼</button>
        </div>
        <ChallengeHBS/>
        <MainTab />
      </Background>
    </>
  );
};
export default Challenge;

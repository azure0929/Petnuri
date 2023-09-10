import MainTab from "@/components/MainTab";
import Background from "@/components/Background";
import '@/styles/challenge.scss'
import { useRef } from "react";
import fireImage from '/fire.png'
import creditImage from '/credit.png'
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { FiRotateCcw } from 'react-icons/fi'
import ChallengeBS from "@/components/BottomSheet/ChallengeBS";
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
        <div className="head">
          <span>챌린지</span>
        </div>
        <div className="name">
          <div className="img"></div>
          <div className="title">꿍이집사 펫고수</div>
        </div>
        <div className="credit">
         1220 크레딧 
         <img src={creditImage} alt="credit" />
        </div>

        <div className="shop">
          <div className="container">
            <button className="button left-button">포인트샵 가기</button>
            <span>|</span>
            <button className="button right-button">구매내역 보기</button>
          </div>
        </div>

        <div className="event">
          <div className="head">
            <span>이벤트 챌린지</span>
          </div>
          <div 
          className="body" 
          ref={scrollRef}
          onWheel={handleWheel}>
            <div className="section">
              <div className="img"></div>
              <div className="text">
                <div className="title">랜선대회 챌린지</div>
                <div className="subtitle">카드 디자인 서브 타이틀</div>
              </div>
            </div>
          </div>
        </div>

        <div className="daily_head">
          <div className="left-item">
            <img src={fireImage} alt="fire" />
            <span className="head">데일리 챌린지</span>
          </div>
          <div className="sort">최신순 <IoIosArrowDown/></div>
        </div>
        <div className="daily_body">
          <div className="challenge">
            <div className="img"></div>
            <div className="main">
              <div className="title">대규모 챌린지</div> 
              <div className="time"><FiRotateCcw/> 6시간 후 </div>
            </div>
            <div className="participate">참여하기 <IoIosArrowForward/></div>
          </div>
        </div>
        <div className="bonus">
          <div className="title">추가 보너스 받기</div>
          <button className="button" onClick={() => setBottomIsOpen(true)}>보너스 받기 버튼</button>
        </div>
        <ChallengeBS/>
        <MainTab />
      </Background>
      
    </>
  );
};
export default Challenge;

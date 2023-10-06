import BottomSheet from "@/components/BottomSheet";
import styles from '@/styles/challengehbs.module.scss'
import { useState } from 'react'
import { createToast, simpleToast } from "@/utils/ToastUtils";
import checkGray from '@/assets/check_circle_gray.svg'
import checkBlue from '@/assets/check_circle_blue.svg'
import LoginModal from "@/components/modal/LoginModal";
import { getCookie } from "@/utils/Cookie";
import { useSetRecoilState } from 'recoil';
import { loginModalState } from "@/store/challengeState";
import { checkApi } from "@/lib/apis/challengeApi";

const ChallengeHBS = () => {
  const setLoginOpen = useSetRecoilState(loginModalState); 
  const [selected, setSelected] = useState<number | null>(null);
  const [isClicked, setIsClicked] = useState(false);
  const [isClicked2, setIsClicked2] = useState(false);
  const token = getCookie("jwtToken")

  const openLoginModal = (callback: () => void) => {
    if (!token) {
      setLoginOpen(true);
    } else {
      callback();
      setIsClicked(true);
    }
  };

  const handleYesClick = () => {
    if (isClicked2) {
      wrong();
    } else if (!token) {
      setLoginOpen(true);
    } else {
      yes();
      setIsClicked2(true);
    }
  };  

  const handleClick = (index:number) => {
    if (selected === index) {
      setSelected(null);
    } else {
      setSelected(index);
    }
  };

  const complete = async () => {
    try {
      await checkApi();
      createToast('success', '포인트 지급이 완료되었습니다');
    } catch (error) {
      console.error("Error in complete function:", error);
    }
  };
  const yes = () => createToast('success', '포인트 지급이 완료되었습니다')
  const wrong = () => createToast('error', '내일 다시 참여가 가능합니다');
  const copy = () => simpleToast('클립보드에 복사되었습니다');

  return (
    <>
      <BottomSheet>
        <div className={styles.head}>보너스 포인트 받기</div>
        <LoginModal />
        <div className={styles.attend}>
          <div className={styles.text_box}>
            <span className={styles.title}>출석체크</span>
            <div className={styles.sub}>출석석체크하고 10 포인트 받아가세요!</div>
          </div>
          <button 
            className={`${styles.btn_1} ${isClicked ? styles.disabled : ''}`} 
            onClick={() => openLoginModal(complete)} 
            disabled={isClicked}
          >
            포인트 받기
          </button>
        </div>

        <div className={styles.quiz}>
          <div className={styles.text_box}>
            <span className={styles.title}>집사퀴즈</span>
            <div className={styles.sub}>
            집사에겐 필수 상식! 집사 퀴즈 풀고 20포인트 받아가세요 !
            </div>
          </div>
        </div>

        <div className={styles.quetion}>
          <span>Q. 다음 중 강아지, 고양이에게 절대 먹이면 안되는 음식은?</span>
        </div>
        <div className={styles.answer}>
          <div className={styles.selected} onClick={() => handleClick(0)}> 
            <img src={selected === 0 ? checkBlue : checkGray} alt="체크" /> 
            1. 고구마
          </div>
          <div className={styles.selected} onClick={() => handleClick(1)}> 
            <img src={selected === 1 ? checkBlue : checkGray} alt="체크" /> 
            2. 오이
          </div>
          <div className={styles.selected} onClick={() => handleClick(2)}> 
            <img src={selected === 2 ? checkBlue : checkGray} alt="체크" /> 
            3. 양파
          </div>
          <div className={styles.selected} onClick={() => handleClick(3)}> 
            <img src={selected === 3 ? checkBlue : checkGray} alt="체크" /> 
            4. 쌀밥
          </div>
        </div>

        <button 
        className={`${styles.check} ${isClicked2 ? styles.disabled : ''}`}
        onClick={handleYesClick}
        > 
          정답 확인 
        </button>

        <div className={styles.invite}>
          <div className={styles.text_box}>
            <span className={styles.title}>친구초대</span>
            <div className={styles.sub}>
              회원가입시 추천코드를 입력하면 나도 친구도 모두 2000포인트 지급! 
            </div>
          </div>
        </div>

        <div className={styles.code}>
          <div className={styles.text}>추천코드 : XRKWOE</div>
          <button className={styles.btn_2} onClick={() => openLoginModal(copy)}>복사하기</button>
        </div>
      </BottomSheet>
    </>
  );
};
export default ChallengeHBS;

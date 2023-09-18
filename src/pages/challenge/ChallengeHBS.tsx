import BottomSheet from "@/components/BottomSheet";
import styles from '@/styles/challengehbs.module.scss'
import { useState } from 'react'
import { createToast, simpleToast } from "@/utils/ToastUtils";
import checkGray from '@/assets/check_circle_gray.svg'
import checkBlue from '@/assets/check_circle_blue.svg'

const ChallengeHBS = () => {
  const [selected, setSelected] = useState(null);

  const handleClick = (index) => {
    if (selected === index) {
      setSelected(null);
    } else {
      setSelected(index);
    }
  };

  const complete = () => createToast('success', '포인트 지급이 완료되었습니다');
  const wrong = () => createToast('error', '내일 다시 참여가 가능합니다');
  const copy = () => simpleToast('클립보드에 복사되었습니다');

  return (
    <>
      <BottomSheet>
        <div className={styles.head}>보너스 포인트 받기</div>

        <div className={styles.attend}>
          <div className={styles.text_box}>
            <span className={styles.title}>출석체크</span>
            <div className={styles.sub}>출석석체크하고 30 포인트 받아가세요 !</div>
          </div>
          <button className={styles.btn_1} onClick={complete}>포인트 받기</button>
        </div>

        <div className={styles.quiz}>
          <div className={styles.text_box}>
            <span className={styles.title}>집사퀴즈</span>
            <div className={styles.sub}>
            집사 퀴즈 풀고 50포인트 받아가세요 !
            </div>
          </div>
          <button className={styles.btn_1} onClick={wrong}>지급완료</button>
        </div>

        <div className={styles.quetion}>
          <div>Q. 다음 중 강아지, 고양이에게 절대 먹이면 안되는 음식은?</div>
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

        <div className={styles.check}> 정답 확인 </div>

        <div className={styles.invite}>
          <div className={styles.text_box}>
            <span className={styles.title}>친구초대</span>
            <div className={styles.sub}>
              추천 코드를 통해 친구가 회원가입을 할 경우 
              <br />나와 내 친구에게 각각 2000 포인트를 드립니다 !
            </div>
          </div>
        </div>

        <div className={styles.code}>
          <div className={styles.text}>추천코드 : XRKWOE</div>
          <button className={styles.btn_2} onClick={copy}>복사하기</button>
        </div>
      </BottomSheet>
    </>
  );
};
export default ChallengeHBS;

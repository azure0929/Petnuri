import BottomSheet from "@/components/BottomSheet";
import styles from '@/styles/challengehbs.module.scss'
import fire from '@/asset/fire.svg'
import { createToast } from "@/utils/ToastUtils";

const ChallengeHBS = () => {

  const complete = () => createToast('success', '포인트 지급이 완료되었습니다');
  const wrong = () => createToast('error', '오답입니다. 내일 다시 참여가 가능합니다');
  const copy = () => createToast('success', '복사되었습니다');

  return (
    <>
      <BottomSheet>
        <div className={styles.head}>보너스 포인트 받기</div>

        <div className={styles.attend}>
          <div className={styles.text_box}>
            <img src={fire} alt="fire" />
            <span className={styles.title}>출석체크</span>
            <div className={styles.sub}>출석석체크하고 30 포인트 받아가세요 !</div>
          </div>
          <button className={styles.btn_1} onClick={complete}>지급완료</button>
        </div>

        <div className={styles.quiz}>
          <div className={styles.text_box}>
            <img src={fire} alt="fire" />
            <span className={styles.title}>집사퀴즈</span>
            <div className={styles.sub}>
              집사에겐 필수 상식 ! 
              <br />집사 퀴즈 풀고 50포인트 받아가세요 !
            </div>
          </div>
          <button className={styles.btn_1} onClick={wrong}>지급완료</button>
        </div>

        <div className={styles.quetion}></div>

        <div className={styles.invite}>
          <div className={styles.text_box}>
            <img src={fire} alt="fire" />
            <span className={styles.title}>친구초대</span>
            <div className={styles.sub}>
              추천 코드를 통해 친구가 회원가입을 할 경우 
              <br />회원님께 5000 포인트를 드립니다 !
            </div>
          </div>
        </div>

        <div className={styles.code}>
          <div className={styles.text}>추천코드 :</div>
          <button className={styles.btn_2} onClick={copy}>추천코드 복사</button>
        </div>
      </BottomSheet>
    </>
  );
};
export default ChallengeHBS;

import Background from "@/components/Background";
import { useNavigate } from "react-router-dom";
import arrow_left_mid from "@/assets/arrow_left_mid.svg";
import styles from '@/styles/registsuccess.module.scss';

const RegistSuccess = () => {

  const navigate = useNavigate();

  const onPetRegist = () => {
    navigate(`/petregist`);
  }

  const onMain = () => {
    navigate(`/`);
  }

  return (
    <>
      <Background>
        <div className={styles.head}>
          <div role="button" className={styles.prev} onClick={onPetRegist}>
            <img src={arrow_left_mid} alt="prev" />
          </div>
          <p>펫 정보 등록</p>
        </div>
        <div className={styles.contents}>
          <div className={styles.select}>
            <p className={styles.title}>우리아이 등록에 성공했습니다!</p>
            <span>펫누리의 공간에 여러분을 초대합니다!</span>
          </div>
        </div>
        <div className={styles.lottie}>
          <p>로티파일</p>
        </div>
        <div className={styles.next}>
          <div
            role="button"
            onClick={onMain}
          >
            펫누리 시작하기
          </div>
        </div>
      </Background>
    </>
  );
};

export default RegistSuccess;

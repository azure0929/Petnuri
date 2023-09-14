import Background from '@/components/Background';
import arrow_left_mid from "@/assets/arrow_left_mid.svg";
import styles from "@/styles/petregist.module.scss";

const PetRegist = () => {
  return (
    <>
      <Background>
      <div className={styles.head}>
          <div role="button" className={styles.prev}>
            <img src={arrow_left_mid} alt="prev" />
          </div>
          <p>펫 정보 등록</p>
        </div>
        <div className={styles.contents}>
          <div className={styles.name}>
            <h2 className={styles.title}>견종/묘종을 등록해 주세요</h2>
            <input
              type="text"
              placeholder="ex) 말티즈, 브리티쉬 숏헤어"
            />
          </div>
          <div className={styles.select}>
            <h2 className={styles.title}>성별을 선택해주세요</h2>
            <div className={styles.list}>
              <div
                className={styles.maleButton}
              >
                강아지
              </div>
              <div
                className={styles.maleButton}
                role="button"
              >
                고양이
              </div>
            </div>
          </div>
          <div className={styles.age}>
            <h2 className={styles.title}>나이를 입력해주세요</h2>
            <input
              type="text"
              placeholder="숫자만 입력해 주세요"
            />
          </div>
        </div>
        <div className={styles.next}>
          <div
            role="button"
          >
            다음
          </div>
        </div>
      </Background>
    </>
  );
};

export default PetRegist;

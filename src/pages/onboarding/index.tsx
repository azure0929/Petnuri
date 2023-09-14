import Background from "@/components/Background";
import styles from '@/styles/onboarding.module.scss';

const OnBoarding = () => {
  return (
    <div>
      <Background>
      <div className={styles.head}>
          <p>펫 정보 등록</p>
        </div>
        <div className={styles.contents}>
          <div className={styles.welcome}>
            <p>
              반가워요! <br />
              회원가입이 완료되었어요!
            </p>
            <span>정보를 입력하면 맞춤 컨텐츠를 만나볼 수 있어요</span>
          </div>
          <div className={styles.select}>
            <h2 className={styles.title}>어떤 반려동물과 함께하고 계신가요?</h2>
            <div className={styles.list}>
              <div
                className={styles.petButton}
                role="button"
              >
                강아지
              </div>
              <div
                className={styles.petButton}
                role="button"
              >
                고양이
              </div>
            </div>
          </div>
          <div className={styles.name}>
            <h2 className={styles.title}>반려동물의 이름을 입력해주세요!</h2>
            <input
              type="text"
              placeholder="반려동물의 이름이 뭔가요?"
            />
          </div>
          <div role="button" className={styles.skip}>
            <p>지금은 건너뛰기</p>
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
    </div>
  )
}

export default OnBoarding;
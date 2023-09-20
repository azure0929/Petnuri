import Background from "@/components/Background";
import arrow_left_mid from "@/assets/arrow_left_mid.svg";
import arrow_right_small from "@/assets/arrow_right_small.svg";
import check_circle_gray from "@/assets/check_circle_gray.svg";
import styles from "@/styles/signup.module.scss";

const SignUp = () => {
  return (
    <>
      <Background>
        <div className={styles.head}>
          <div role="button" className={styles.prev}>
            <img src={arrow_left_mid} alt="prev"/>
          </div>
          <p>카카오톡 회원가입</p>
        </div>
        <div className={styles.contents}>
          <div className={styles.read}>
            <div className={styles.box}>
              <h2 className={styles.title}>이메일</h2>
              <input
                type="text"
                readOnly
                placeholder="petnuri@kakao.talk"
              />
            </div>
          </div>
          <div className={styles.box}>
            <h2 className={styles.title}>닉네임</h2>
            <div className={styles.name}>
              <input
                type="text"
                placeholder="닉네임을 입력해주세요"
              />
              <div
                role="button"
                className={styles.duplicate}
              >
                중복체크
              </div>
            </div>
          </div>
          <div className={styles.box}>
            <p className={styles.title}>
              추천인 코드 (선택)
            </p>
            <input
              type="text"
              placeholder="추천인의 코드를 입력해주세요"
            />
          </div>
        </div>
        <div className={styles.agree}>
          <div className={styles.checktitle}>
            <img
              src={check_circle_gray}
              alt="check_circle"
              className={styles.checkbig}
              role="button"
            />
            <h3>약관 전체 동의</h3>
          </div>
          <div className={styles.listbox}>
            <ul className={styles.list}>
              <li className={styles.checklist}>
                <div className={styles.left}>
                  <img
                    src={check_circle_gray}
                    alt="check_circle"
                    role="button"
                  />
                  <p>(필수) 서비스 이용약관 동의<span>*</span></p>
                </div>
                <div
                  role="button"
                  className={styles.right}
                >
                  <img src={arrow_right_small} alt="arrow_right_small"/>
                </div>
              </li>
              <li className={styles.checklist}>
                <div className={styles.left}>
                  <img
                    src={check_circle_gray}
                    alt="check_circle"
                    role="button"
                  />
                  <p>(필수) 개인정보 수집 및 이용 동의<span>*</span></p>
                </div>
                <div
                  role="button"
                  className={styles.right}
                >
                  <img src={arrow_right_small} alt="arrow_right_small" />
                </div>
              </li>
              <li className={styles.checklist}>
                <div className={styles.left}>
                  <img
                    src={check_circle_gray}
                    alt="check_circle"
                    role="button"
                  />
                  <div>
                    <p>
                      (선택) 광고성 정보 수신 전체 동의
                    </p>
                  </div>
                </div>
              </li>
              <div className={styles.desc}>
                마케팅 정보 수집에 동의하시면, 이벤트 및 할인 혜택 안내를 <br />
                누구보다 빠르게 받아보실 수 있어요!
              </div>
            </ul>
          </div>
        </div>
        <div className={styles.agreebtn}>
          <div
            role="button"
          >
            동의하고 가입하기
          </div>
        </div>
      </Background>
    </>
  )
}

export default SignUp;
import { useState, ChangeEvent, FocusEvent } from "react";
import Background from "@/components/Background";
import arrow_left_mid from "@/assets/arrow_left_mid.svg";
import arrow_right_small from "@/assets/arrow_right_small.svg";
import check_circle_gray from "@/assets/check_circle_gray.svg";
import check_circle_blue from "@/assets/check_circle_blue.svg";
import styles from "@/styles/signup.module.scss";

const SignUp = () => {
  const [nickname, setNickname] = useState<string>("");
  const [nicknameError, setNicknameError] = useState<string>("");
  const [isNicknameValid, setIsNicknameValid] = useState<boolean>(false);
  const [isDuplicateChecked, setIsDuplicateChecked] = useState<boolean>(false);
  const [referralCode, setReferralCode] = useState<string>("");
  const [referralCodeError, setReferralCodeError] = useState<string>("");

  const [isAgreeAll, setIsAgreeAll] = useState<boolean>(false);
  const [isServiceAgreed, setIsServiceAgreed] = useState<boolean>(false);
  const [isPrivacyAgreed, setIsPrivacyAgreed] = useState<boolean>(false);
  const [isMarketingAgreed, setIsMarketingAgreed] = useState<boolean>(false);

  const isAllAgreed = isServiceAgreed && isPrivacyAgreed;
  const isButtonEnabled = isNicknameValid && !nicknameError && !isDuplicateChecked && isAllAgreed && (referralCode === '' || referralCodeError === '');

  const handleNicknameChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setNickname(inputValue);

    const regex = /^[a-zA-Z가-힣]{2,10}$/;
    if (!regex.test(inputValue)) {
      setNicknameError("숫자, 특수문자, 공백 제외 최소 2자 ~ 10자 입력");
      setIsNicknameValid(false);
    } else {
      setNicknameError("");
      setIsNicknameValid(true);
    }

    // 중복 체크 다시 허용
    setIsDuplicateChecked(false);
  };

  const generateReferralCode = () => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    let code = '';

    for (let i = 0; i < 5; i++) {
      const randomLetter = letters[Math.floor(Math.random() * letters.length)];
      code += randomLetter;
    }

    for (let i = 0; i < 3; i++) {
      const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
      code += randomNumber;
    }

    return code;
  };

  const handleDuplicateCheck = async () => {
    // 고유한 추천인 코드 생성
    const uniqueReferralCode = generateReferralCode();

    // 상태에 고유한 추천인 코드 설정
    setReferralCode(uniqueReferralCode);

    // 필요한 경우 중복 확인 로직 수행
    // ...

    // 중복 확인 완료로 상태 설정
    setIsDuplicateChecked(true);
  };

  const handleReferralCodeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setReferralCode(inputValue);
  };

  const handleReferralCodeBlur = async (event: FocusEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    // 추천인 코드 유효성 검사 로직 (예: 길이가 6이상)
    if (inputValue.length < 6) {
      setReferralCodeError("해당 추천인 코드가 올바르지 않습니다.");
    } else {
      setReferralCodeError("");

      // 서버로 추천인 코드 중복 확인 요청
      /* try {
        const response = await axios.post("/api/checkReferralCode", {
          referralCode: inputValue,
        });

        if (response.data.isDuplicate) {
          setReferralCodeError("해당 추천인 코드는 이미 사용 중입니다.");
        }
      } catch (error) {
        console.error("추천인 코드 중복 확인 오류:", error);
      } */
    }
  };

  // 개별 항목 체크 박스를 토글
  const handleServiceAgreeToggle = () => {
    setIsServiceAgreed((prev) => !prev);
  };

  const handlePrivacyAgreeToggle = () => {
    setIsPrivacyAgreed((prev) => !prev);
  };

  const handleMarketingAgreeToggle = () => {
    setIsMarketingAgreed((prev) => !prev);
  };

  // 약관 전체 동의를 토글
  const handleAgreeAllToggle = () => {
    const newAgreeAll = !isAgreeAll;
    setIsAgreeAll(newAgreeAll);

    // 전체 동의 상태에 따라 개별 항목도 변경
    setIsServiceAgreed(newAgreeAll);
    setIsPrivacyAgreed(newAgreeAll);
    setIsMarketingAgreed(newAgreeAll);
  };

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
                value={nickname}
                onChange={handleNicknameChange}
                className={`${isNicknameValid ? styles.valid : ""} ${
                  nicknameError || (isDuplicateChecked && !isNicknameValid) ? styles.invalid : ""
                }`}
              />
              <div
                role="button"
                className={`${styles.duplicate} ${
                  isNicknameValid ? styles.valid : ""
                }`}
                onClick={handleDuplicateCheck}
              >
                중복체크
              </div>
            </div>
            {nicknameError && (
              <p className={styles.nameerror}>{nicknameError}</p>
            )}
            {isNicknameValid && !nicknameError && (
              <p className={styles.validText}>
                사용 가능합니다
              </p>
            )}
          </div>
          <div className={styles.box}>
            <p className={styles.title}>
              추천인 코드 (선택)
            </p>
            <input
              type="text"
              placeholder="추천인의 코드를 입력해주세요"
              value={referralCode}
              onChange={handleReferralCodeChange}
              onBlur={handleReferralCodeBlur}
              className={referralCodeError ? styles.invalid : ""}
            />
            {referralCodeError && (
              <p className={styles.nameerror} style={{ color: "$red_accent_F42A3B", fontSize: "12px" }}>
                {referralCodeError}
              </p>
            )}
          </div>
        </div>
        <div className={styles.agree}>
          <div className={styles.checktitle}>
            <img
              src={isAgreeAll ? check_circle_blue : check_circle_gray}
              alt="check_circle"
              className={styles.checkbig}
              onClick={handleAgreeAllToggle}
              role="button"
            />
            <h3>약관 전체 동의</h3>
          </div>
          <div className={styles.listbox}>
            <ul className={styles.list}>
              <li className={styles.checklist}>
                <div className={styles.left}>
                  <img
                    src={isServiceAgreed ? check_circle_blue : check_circle_gray}
                    alt="check_circle"
                    onClick={handleServiceAgreeToggle}
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
                    src={isPrivacyAgreed ? check_circle_blue : check_circle_gray}
                    alt="check_circle"
                    onClick={handlePrivacyAgreeToggle}
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
                    src={isMarketingAgreed ? check_circle_blue : check_circle_gray}
                    alt="check_circle"
                    onClick={handleMarketingAgreeToggle}
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
            className={`${styles.agreeactive} ${isButtonEnabled ? '' : styles.disabled}`}
          >
            동의하고 가입하기
          </div>
        </div>
      </Background>
    </>
  )
}

export default SignUp;
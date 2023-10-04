import { useState, useEffect, ChangeEvent, useRef } from "react";
import Background from "@/components/Background";
import arrow_left_mid from "@/assets/arrow_left_mid.svg";
import arrow_right_small from "@/assets/arrow_right_small.svg";
import check_circle_gray from "@/assets/check_circle_gray.svg";
import check_circle_blue from "@/assets/check_circle_blue.svg";
import styles from "@/styles/signup.module.scss";
import ServiceHBS from "@/pages/signup/ServiceHBS";
import PrivacyHBS from "@/pages/signup/PrivacyHBS";
import { useSetRecoilState } from "recoil";
import { serviceSheetState, privacySheetState } from "@/store/signupState";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { join } from "@/lib/apis/userApi";

const SignUp = () => {
  const [name, setName] = useState<string>("");
  const [nameError, setNameError] = useState<string>("");
  const [isNicknameValid, setIsNicknameValid] = useState<boolean>(false);
  const [isDuplicateChecked, setIsDuplicateChecked] = useState<boolean>(false);

  const setserviceBottomIsOpen = useSetRecoilState(serviceSheetState);
  const setprivacyBottomIsOpen = useSetRecoilState(privacySheetState);

  const [privacyVisible, setPrivacyVisible] = useState(true);
  const [serviceVisible, setServiceVisible] = useState(true);

  const [isAgreeAll, setIsAgreeAll] = useState<boolean>(false);
  const [isServiceAgreed, setIsServiceAgreed] = useState<boolean>(false);
  const [isPrivacyAgreed, setIsPrivacyAgreed] = useState<boolean>(false);
  const [isMarketingAgreed, setIsMarketingAgreed] = useState<boolean>(false);

  const [referralCode, setReferralCode] = useState<string>("");
  const [referralCodeError, setReferralCodeError] = useState<string>("");

  const [kakaoEmail, setKakaoEmail] = useState<string>(""); // 카카오 계정의 이메일 상태

  const navigate = useNavigate();

  const isAllAgreed = isServiceAgreed && isPrivacyAgreed;
  const isButtonEnabled =
    isNicknameValid && !nameError && isDuplicateChecked && isAllAgreed || referralCode;

  const emailInputRef = useRef<HTMLInputElement | null>(null);

  const handleAgreeButtonClick = async () => {
    if (isButtonEnabled) {
      try {
        const email = kakaoEmail || (emailInputRef.current?.placeholder ?? "");

        const response = await join({
          email: email,
          nickname: name,
          referral: referralCode,
          isAgreed: isAllAgreed,
        });

        const { jwtToken } = response.data;

        sessionStorage.setItem('jwtToken', jwtToken);

        console.log("회원가입 성공:", response.data);
        navigate("/onboarding");
      } catch (error) {
        console.error("회원가입 실패", error);
      }
    }
  };

  const onLogin = () => {
    navigate(`/login`);
  };

  const handlePrivacyConfirm = () => {
    setPrivacyVisible(false);
  };

  const handleServiceConfirm = () => {
    setServiceVisible(false);
  };

  const handleNicknameChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setName(inputValue);

    const regex = /^[a-zA-Z가-힣]{2,10}$/;
    if (!regex.test(inputValue)) {
      setNameError("숫자, 특수문자, 공백 제외 최소 2자 ~ 10자 입력");
      setIsNicknameValid(false);
    } else {
      setNameError("");
      setIsNicknameValid(true);
    }

    // 중복 체크 다시 허용
    setIsDuplicateChecked(false);
  };

  const handleDuplicateCheck = async () => {
    try {
      const response = await axios.get("http://3.34.154.62:8080/auth/nickname", {
        params: { nickname: name },
      });

      const { isExists } = response.data;

      if (isExists) {
        setIsNicknameValid(false);
        setNameError("이미 사용 중인 닉네임입니다.");
        console.log("사용 불가능한 닉네임: ", name);
      } else {
        setIsNicknameValid(true);
        setNameError("");
        console.log("사용 가능한 닉네임: ", name);
      }

      setIsDuplicateChecked(true);
    } catch (error) {
      console.error(error);
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

  useEffect(() => {
    const fetchKakaoEmail = async () => {
      try {
        const hasKakaoAccessToken = sessionStorage.getItem("kakaoAccessToken") || "";
        if (!hasKakaoAccessToken) {
          console.error("Kakao Access Token이 없습니다. 로그인 후에 다시 시도하세요.");
          return;
        }

        const response = await axios.get("https://kapi.kakao.com/v2/user/me", {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("kakaoAccessToken")}`,
          },
        });

        const { kakao_account } = response.data;
        const { email } = kakao_account;

        // 이메일 정보를 상태에 저장
        setKakaoEmail(email);

        const emailInput = document.querySelector("#email-input") as HTMLInputElement;
        emailInput.placeholder = email;
      } catch (error) {
        console.error("Kakao 이메일 조회 오류:", error);
      }
    };

    fetchKakaoEmail();
  }, []);

  const handleReferralCodeBlur = async () => {
    try {
      if (!referralCode) {
        setReferralCodeError("");
        console.log("No referral code provided.");
        return;
      }

      const response = await axios.get("http://3.34.154.62:8080/auth/referral", {
        params: { referralCode: referralCode },
      });

      const { isValid } = response.data;

      if (isValid) {
        setReferralCodeError("이미 사용 중인 추천인 코드입니다.");
        console.log("이미 사용 중인 추천인 코드입니다.");
      } else {
        setReferralCodeError("");
        console.log("사용 불가능한 추천인 코드입니다.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Background>
        <div className={styles.head}>
          <div role="button" className={styles.prev}>
            <img src={arrow_left_mid} alt="prev" onClick={onLogin} />
          </div>
          <p>카카오톡 회원가입</p>
        </div>
        <div className={styles.contents}>
          <div className={styles.read}>
            <div className={styles.box}>
              <h2 className={styles.title}>이메일</h2>
              <input id="email-input" readOnly />
            </div>
          </div>
          <div className={styles.box}>
            <h2 className={styles.title}>닉네임</h2>
            <div className={styles.name}>
              <input
                type="text"
                placeholder="닉네임을 입력해주세요"
                value={name}
                onChange={handleNicknameChange}
                className={`${isNicknameValid ? styles.valid : ""} ${
                  nameError || (isDuplicateChecked && !isNicknameValid) ? styles.invalid : ""
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
            {isDuplicateChecked && isNicknameValid && !nameError && (
              <p className={styles.validText}>사용 가능합니다</p>
            )}
          </div>
          <div className={styles.box}>
            <p className={styles.title}>추천인 코드 (선택)</p>
            <input
              type="text"
              placeholder="추천인의 코드를 입력해주세요"
              value={referralCode}
              onChange={(e) => setReferralCode(e.target.value)}
              onBlur={handleReferralCodeBlur}
              className={`${referralCodeError ? styles.invalid : ""}`}
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
                  onClick={() => setserviceBottomIsOpen(true)} // Open ServiceHBS Bottom Sheet
                >
                  <img src={arrow_right_small} alt="arrow_right_small" onClick={() => setserviceBottomIsOpen(true)} />
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
                  onClick={() => setprivacyBottomIsOpen(true)} // Open PrivacyHBS Bottom Sheet
                >
                  <img src={arrow_right_small} alt="arrow_right_small" onClick={() => setprivacyBottomIsOpen(true)} />
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
                    <p>(선택) 광고성 정보 수신 전체 동의</p>
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
            onClick={handleAgreeButtonClick}
            className={`${styles.agreeactive} ${isButtonEnabled ? "" : styles.disabled}`}
          >
            동의하고 가입하기
          </div>
        </div>
        {serviceVisible && <ServiceHBS onConfirm={handleServiceConfirm} />}
        {privacyVisible && <PrivacyHBS onConfirm={handlePrivacyConfirm} />}
      </Background>
    </>
  );
};

export default SignUp;
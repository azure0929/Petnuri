import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Background from "@/components/Background";
import MainTab from "@/components/MainTab";
import login_screen from "@/assets/login_screen.svg";
import kakao from "@/assets/kakao.svg";
import styles from "@/styles/login.module.scss";

const Login = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleKakaoLoginClick = () => {
    const response = {
      success: true,
      accessToken: "", // 실제 Access Token 사용 예정
    };

    if (response.success) {
      if (response.accessToken) {
        setIsAuthenticated(true);
        // Access Token이 있는 경우, 메인 페이지로 이동
        navigate("/");
      } else {
        // Access Token이 없는 경우, 회원가입 페이지로 이동
        navigate("/signup");
      }
    }
  };
  
  return (
    <>
      <Background>
        <div className={styles.container}>
          <div className={styles.head}></div>
          <div className={styles.contents}>
            <div className={styles.title}>
              <p>
                반려동물과의 건강한 <br />
                라이프 챌린지
              </p>
              <span>동료 집사분들과 함께 해볼까요?</span>
            </div>
            {!isAuthenticated && (
              <div
                role="button"
                className={styles.kakao}
                onClick={handleKakaoLoginClick}
              >
                <img src={kakao} alt="kakao-icon" />
                <span>카카오로 간편 로그인</span>
              </div>
            )}
            <div className={styles.chat}>
              <span>로그인이 안되시나요?</span> |
              <span>1 : 1 채팅 상담하기</span>
            </div>
          </div>
          <img
            className={styles.back}
            src={login_screen}
            alt="login_screen"
          />
        </div>
      </Background>
      <MainTab />
    </>
  );
};

export default Login;

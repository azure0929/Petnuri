import Background from "@/components/Background";
import MainTab from "@/components/MainTab";
import login_screen from "@/assets/login_screen.svg";
import kakao from "@/assets/kakao.svg";
import styles from "@/styles/login.module.scss";
import { REST_API_KEY } from "@/lib/apis/base";
import {useEffect} from 'react'

const Login = () => {
  const handleKakaoLogin = () => {
    const REDIRECT_URL = `http://3.34.154.62:8080/auth/kakao/login`;
  
    window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URL}&response_type=code`;
  };

  // 1 : 1 채팅 상담하기 클릭 시 이동
  const chatLink = "http://pf.kakao.com/_RfxnuG/chat";

  const handleChatClick = () => {
    window.location.href = chatLink;
  };

  useEffect(() => {
    const hashParams = new URLSearchParams(window.location.hash.substring(1));
    const jwtToken = hashParams.get('jwtToken');

    if (jwtToken === null) {
      window.location.href = '/signup';
    } else {
      window.location.href = '/';
    }
  }, []);

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
            <div
              role="button"
              className={styles.kakao}
            >
              <img src={kakao} alt="kakao-icon" />
              <div role="button" onClick={handleKakaoLogin}>카카오로 간편 로그인</div>
            </div>
            <div className={styles.chat} onClick={handleChatClick}>
              <span>로그인이 안되시나요?</span> |
              <span>1 : 1 채팅 상담하기</span>
            </div>
          </div>
          <img className={styles.back} src={login_screen} alt="login_screen" />
        </div>
      </Background>
      <MainTab />
    </>
  );
};

export default Login;
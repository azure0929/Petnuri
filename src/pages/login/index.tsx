import Background from '@/components/Background';
import MainTab from '@/components/MainTab';
import login_screen from '@/assets/login_screen.svg';
import kakao from '@/assets/kakao.svg';
import styles from '@/styles/login.module.scss';
import { REST_API_KEY } from '@/lib/apis/base';
import { login } from '@/lib/apis/userApi';

const Login = () => {
  const REDIRECT_URL = `localhost:5173`;
  const handleKakaoLogin = () => {
    window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URL}&response_type=code`;
    login(`https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URL}`)
  };

  const chatLink = 'http://pf.kakao.com/_RfxnuG/chat';

  const handleChatClick = () => {
    window.location.href = chatLink;
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
            <div
              role="button"
              className={styles.kakao}
            >
              <img
                src={kakao}
                alt="kakao-icon"
              />
              <div
                role="button"
                onClick={handleKakaoLogin}
              >
                카카오로 간편 로그인
              </div>
            </div>
            <div
              className={styles.chat}
              onClick={handleChatClick}
            >
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

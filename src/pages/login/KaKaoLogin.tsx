import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "@/lib/apis/userApi";
import { setCookie } from "@/utils/Cookie";

const KaKaoLogin = () => {
  const navigate = useNavigate();
  const codeProcessed = useRef(false);

  useEffect(() => {
    if (!codeProcessed.current) {
      codeProcessed.current = true;

      const processLogin = async () => {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');
        
        try {
          const res = await login(code);
            const { jwtToken, jwtRefreshToken, kakaoToken, email } = res?.data;
            console.log(jwtToken);
            
            if (jwtToken) {
              localStorage.setItem("jwtRefreshToken", jwtRefreshToken);
              localStorage.setItem("email", email);
              localStorage.setItem("kakaoToken", kakaoToken);
              setCookie("jwtToken", jwtToken);
              navigate("/");
            } else {
              localStorage.setItem("email", email);
              localStorage.setItem("kakaoToken", kakaoToken);
              navigate("/signup");
            }
        } catch (error) {
          console.log("로그인 실패", error);
          navigate('/login')
        }
      };
      processLogin();
    }
  }, [navigate]);

  return <div>인가 코드 페이지입니다.</div>;
};

export default KaKaoLogin;
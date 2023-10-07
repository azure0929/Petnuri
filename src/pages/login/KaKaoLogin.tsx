import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "@/lib/apis/userApi";
import { setCookie } from "@/utils/Cookie";

const KaKaoLogin = () => {
  const navigate = useNavigate();
  const codeProcessed = useRef(false);

  useEffect(() => {
    const params = new URL(document.location.toString()).searchParams;
    const code = params.get("code");

    if (!codeProcessed.current) {
      codeProcessed.current = true;

      const processLogin = async () => {
        try {
          const res = await login(code);
  
          if (res) {
            const { jwtToken, refreshToken, kakaoAccessToken, email } = res?.data;

            if (jwtToken) {
              localStorage.setItem("refreshToken", refreshToken);
              localStorage.setItem("email", email);
              localStorage.setItem("kakaoAccessToken", kakaoAccessToken);
              setCookie("jwtToken", jwtToken);
              navigate("/");
            } else {
              localStorage.setItem("email", email);
              localStorage.setItem("kakaoAccessToken", kakaoAccessToken);
              navigate("/signup");
            }
          }
        } catch (error) {
          console.log("로그인 실패", error);
        }
      };
      processLogin();
    }
  }, [navigate]);

  return <div>인가 코드 페이지입니다.</div>;
};

export default KaKaoLogin;
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "@/lib/apis/userApi";
import { getCookie, setCookie } from "@/utils/Cookie";

const KaKaoLogin = () => {
  const navigate = useNavigate();
  const codeProcessed = useRef(false);

  useEffect(() => {
    if (!codeProcessed.current) {
      codeProcessed.current = true;

      const processLogin = async () => {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get("code");

        try {
          const res = await login(code);

          if (res && res.data.jwtToken) {
            localStorage.setItem("jwtRefreshToken", res.data.jwtRefreshToken);
            localStorage.setItem("email", res.data.email);
            localStorage.setItem("kakaoToken", res.data.kakaoToken);
            localStorage.setItem("jwtToken", res.data.jwtToken);
            setCookie("jwtToken", res.data.jwtToken);
            console.log("ID: " + document.cookie);
            console.log("ID: " + typeof getCookie("jwtToken"));

            navigate("/");
          } else if (res && !res.data.jwtToken) {
            localStorage.setItem("email", res.data.email);
            localStorage.setItem("kakaoToken", res.data.kakaoToken);
            navigate("/signup");
          }
        } catch (error) {
          console.log("로그인 실패", error);
          navigate("/login");
        }
      };
      processLogin();
    }
  }, [navigate]);

  return <div>인가 코드 페이지입니다.</div>;
};

export default KaKaoLogin;

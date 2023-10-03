import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "@/lib/apis/userApi";

const KaKaoLogin = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // 콜백 URL에서 인가 코드 추출
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");

    if (!code) {
      console.error("카카오 로그인 코드가 없습니다.");
      return;
    }

    const performLogin = async () => {
      try {
        const response = await login(code);

        if (response?.status === 200) {
          const { email, kakaoAccessToken, jwtToken } = response.data;

          localStorage.setItem("email", email);
          localStorage.setItem("kakaoAccessToken", kakaoAccessToken);
          localStorage.setItem("jwtToken", jwtToken);

          navigate("/signup");
        } else {
          console.error("서버 응답 오류");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    performLogin();
  }, [navigate]);

  return <div>인가 코드 페이지입니다.</div>;
};

export default KaKaoLogin;
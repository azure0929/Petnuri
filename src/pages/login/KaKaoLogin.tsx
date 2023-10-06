import { useEffect, useRef } from "react";
import { REST_API_KEY } from "@/lib/apis/base";
import { useNavigate } from "react-router-dom";
import axios from "axios";
//import { setCookie } from "@/utils/Cookie";

const KaKaoLogin = () => {
  const navigate = useNavigate();
  const codeProcessed = useRef(false);

  useEffect(() => {
    const params = new URL(document.location.toString()).searchParams;
    const code = params.get("code");

    if (!codeProcessed.current) {
      codeProcessed.current = true;

      const grantType = "authorization_code";
      const REDIRECT_URL = "http://localhost:5173/KaKaoLogin";

      axios
        .post(
          `https://kauth.kakao.com/oauth/token?grant_type=${grantType}&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URL}&code=${code}`,
          {},
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
            },
          }
        )
        .then((res) => {
          console.log("로그인 성공", res);
          const { access_token } = res.data;
          // setCookie("jwtToken", jwtToken);

          axios
            .post(
              `https://kapi.kakao.com/v2/user/me`,
              {},
              {
                headers: {
                  Authorization: `Bearer ${access_token}`,
                  "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
                },
              }
            )
            .then((userRes) => {
              console.log("유저 정보", userRes);
              const { kakao_account } = userRes.data;
              const { email } = kakao_account;
              const { jwtToken } = res.data;

              if (jwtToken) {
                // jwtToken이 존재하는 경우, 메인 페이지로 이동
                navigate("/");
              } else {
                // jwtToken이 null 또는 undefined인 경우, 회원가입 페이지로 이동
                localStorage.setItem("email", email);
                localStorage.setItem("kakaoAccessToken", access_token);
                navigate("/signup");
              }
            })
            .catch((userError) => {
              console.log("유저 정보 조회 실패", userError);
            });
        })
        .catch((error) => {
          console.log("로그인 실패", error);
        });
    }
  }, [navigate]);

  return <div>인가 코드 페이지입니다.</div>;
};

export default KaKaoLogin;
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { kakaoCodeState } from '@/store/kakaoCodeState';
import { login } from '@/lib/apis/userApi';

const OAuth2RedirectHandler = () => {
  const setKakaoCode = useSetRecoilState(kakaoCodeState);

  useEffect(() => {
    // URL에서 인가코드 추출
    const code = new URL(window.location.href).searchParams.get("code");
    console.log(code)
    
    if (code) {
      // Recoil 상태에 인가코드 저장
      setKakaoCode(code);
      
      // 서버에 로그인 요청
      login(code).then((response) => {
        if(response.data.jwtToken === null) {
          localStorage.setItem('email', response.data.email);
          localStorage.setItem('kakaoToken', response.data.kakaoToken);
          window.location.href = '/signup'; 
        }
        else{
          localStorage.setItem('jwtToken', response.data.jwtToken);
          window.location.href = '/';
        }
      }).catch((error) => console.error(error));
    }
  }, [setKakaoCode]);

  return <div>인가코드를 받는 페이지입니다. 이 페이지를 닫아주세요.</div>;
};

export default OAuth2RedirectHandler;

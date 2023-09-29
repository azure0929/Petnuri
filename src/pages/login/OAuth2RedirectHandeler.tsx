import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { kakaoCodeState } from '@/store/kakaoCodeState';

const OAuth2RedirectHandler = () => {
  const [, setKakaoCode] = useRecoilState(kakaoCodeState);

  useEffect(() => {
    // URL에서 인가코드 추출
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    if (code) {
      // Recoil 상태에 인가코드 저장
      setKakaoCode(code);
    }
  }, [setKakaoCode]);

  return <div>인가코드를 받는 페이지입니다. 이 페이지를 닫아주세요.</div>;
};

export default OAuth2RedirectHandler;

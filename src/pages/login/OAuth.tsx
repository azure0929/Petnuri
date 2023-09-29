import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { kakaoCodeState } from '@/store/kakaoCodeState';
import { login } from '@/lib/apis/userApi';

const OAuth = () => {
  const kakaoCode = useRecoilValue(kakaoCodeState);

  useEffect(() => {
    if (kakaoCode) {
      // 서버로 인가코드 전송하여 토큰 받기
      login(kakaoCode);
    }
  }, [kakaoCode]);

  return <div>카카오 로그인 처리 중입니다...</div>;
};

export default OAuth;

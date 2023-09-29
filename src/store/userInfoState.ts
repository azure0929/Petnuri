import { atom } from 'recoil';

// 초기 상태를 정의합니다.
const initialUserInfo = {
  accessToken: null, // 사용자의 카카오 로그인 토큰을 저장할 필드
  // 다른 사용자 정보 필드도 추가할 수 있습니다.
};

// userInfoState atom을 생성합니다.
export const userInfoState = atom({
  key: 'userInfoState',
  default: initialUserInfo,
});

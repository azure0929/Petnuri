import { atom } from 'recoil';

// 초기값은 null로 설정합니다.
export const kakaoCodeState = atom<string | null>({
  key: 'kakaoCodeState',
  default: null,
});
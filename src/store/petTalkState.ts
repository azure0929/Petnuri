import { atom } from "recoil";

export const activeTabState = atom({
  key: "activeTabState",
  default: "전체", // 기본값을 '전체'로 설정
});

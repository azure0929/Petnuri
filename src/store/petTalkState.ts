import { atom } from "recoil";

export const activeTabState = atom({
  key: "activeTabState",
  default: "전체",
});

export const mapTabToNumber = (tabName: string) => {
  switch (tabName) {
    case "전체":
      return 0;
    case "고민상담":
      return 1;
    case "자유수다":
      return 2;
    default:
      return 0;
  }
};

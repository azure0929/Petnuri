import axios from "axios";
import { API_URL } from "./base";

//아래는 예시입니다 담당자분이 수정 후 주석도 지워주세요!
export const ContestCheckApi = async () => {
  try {
    const response = await axios.get(`${API_URL}/challenge/reward/1`);
    return response.data;
  } catch (error) {
    console.error("Error in checkEmail:", error);
  }
};

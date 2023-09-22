import axios from "axios";

const api = axios.create({
  baseURL: "",
});

//아래는 예시입니다 담당자분이 수정 후 주석도 지워주세요!
export const checkEmail = async (email: string) => {
  try {
    const response = await api.post("/user/email", { email });
    return response.data;
  } catch (error) {
    console.error("Error in checkEmail:", error);
  }
};

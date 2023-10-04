import axios from "axios";
import { API_URL } from "./base";

// 집사대회 api
export const ContestCheckApi = async () => {
  try {
    const response = await axios.get(`${API_URL}/challenge/reward/1`);
    return response.data;
  } catch (error) {
    console.error("Error in ContestCheckApi: " + error);
  }
};
// 집사대회 참여현황 api
export const ContestJoinApi = async () => {
  try {
    const response = await axios.get(
      `${API_URL}/challenge/reward/1/join/other`
    );
    return response.data;
  } catch (error) {
    console.error("Error in ContestJoinApi: " + error);
    // throw error; // 에러 재throw
  }
};

// 집사대회 참여신청 api
export const ContestReviewApi = async (
  accessToken: string,
  imageFile: File,
  content: string
) => {
  try {
    const formData = new FormData();
    formData.append("file", imageFile);

    const headers = {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "multipart/form-data",
    };

    await axios.post(`${API_URL}/challenge/point/1/review`, formData, {
      headers,
    });

    const request = { content };

    await axios.post(`${API_URL}/challenge/point/1/review`, request, {
      headers,
    });
  } catch (error) {
    console.error("Error in ContestReviewApi: " + error);
  }
};

// 야너도? 야 너도!
export const ECyanadoCheckApi = async () => {
  try {
    const response = await axios.get(`${API_URL}/challenge/point/1`);
    return response.data;
  } catch (error) {
    console.error("Error in ContestCheckApi:", error);
  }
};

// 야너도?야나도 내 참여 현황
export const ECyanadoJoinApi = async () => {
  try {
    const response = await axios.post(`${API_URL}/challenge/point/1/reviews`);
    return response.data;
  } catch (error) {
    console.log("Error in ECyanadoJoinApi: " + error);
  }
};

// 야너도?야나두 참여신청
export const ECyanadoReviewApi = async (imageFile: File, content: string) => {
  try {
    const formData = new FormData();
    formData.append("file", imageFile); // 파일 추가
    formData.append("content", content); // JSON 데이터 추가

    const headers = {
      // Authorization: `Bearer ${accessToken}`,
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0MTA1IiwiZXhwIjoxNjk2MzUxNTQ4LCJpZCI6MTUsInJvbGUiOiJVU0VSIn0.bmQSU089F_R7eWfT0-8nPBgmgSeAV7noA7wQo1Z4u1c",
      "Content-Type": "multipart/form-data",
    };

    await axios.post(`${API_URL}/challenge/point/1/review`, formData, {
      headers,
    });

    const request = { content };

    await axios.post(`${API_URL}/challenge/point/1/review`, request, {
      headers,
    });
  } catch (error) {
    console.error("Error in ECyanadoReviewApi: " + error);
  }
};

// 데일리 이벤트 - 간식주기 조회
export const dailyChallenge1Api = async() => {
  try {
    const response = await axios.get(`${API_URL}/challenge/daily/1`)
    return response.data
  } catch (error) {
    console.error("Error in dailyChallange1Api: " + error)
  }
}

// 데일리 이벤트 - 간식주기 참여자 조회
export const daily1JoinListApi = async() => {
  try{
    const response = await axios(`${API_URL}/challenge/daily/1/auth`)
    return response.data
  }catch(error){
    console.error("Error in daily3JoinListApi: " + error)
  }
}

// 데일리 이벤트 - 놀아주기 조회
export const dailyChallenge2Api = async () => {
  try {
    const response = await axios.get(`${API_URL}/challenge/daily/2`)
    return response.data
  } catch (error ) {
    console.error("Error in dailyChallenge2Api: " + error)
  }
}

// 데일리 이벤트 - 위생관리 조회
export const dailyChallenge3Api = async() => {
  try {
    const response = await axios.get(`${API_URL}/challenge/daily/3`)
    return response.data
  } catch (error) {
    console.error("Error in dailyChallenge3Api: " + error)
  }
}
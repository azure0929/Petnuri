import axios from "axios";
import { API_URL } from "./base";
import { getCookie } from "@/utils/Cookie";

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

export const YanadoCheckApi = async () => {
  try {
    const response = await axios.get(`${API_URL}/challenge/point/1`);
    return response.data;
  } catch (error) {
    console.error("Error in YanadoCheckApi:", error);
  }
};

export const DeliveryListApi = async () => {
  try {
    const response = await axios.get(`${API_URL}/delivery/address`, {
      headers: {
        'Authorization': getCookie('jwtToken')
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error in YanadoCheckApi:", error);
  }
};

export const DeliveryRegApi = async (deliveryInfo:any) => {
  try {
    const response = await axios.post(`${API_URL}/delivery/address`, deliveryInfo, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': getCookie('jwtToken')
      }
    });
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error('Failed to register delivery:', error);
    throw error;
  }
};

export const DeliveryDelApi = async (deliveryAddressId: number) => {
  try {
    const response = await axios.delete(`${API_URL}/delivery/address/${deliveryAddressId}`, {
      headers: {
        'Authorization': getCookie('jwtToken')
      }
    });
    
    return response.data;
  } catch (error) {
    console.error('Failed to delete delivery address:', error);
    throw error;
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

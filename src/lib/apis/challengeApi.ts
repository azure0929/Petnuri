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

export const ECyanadoCheckApi = async () => {
  try {
    const response = await axios.get(`${API_URL}/challenge/point/1`);
    return response.data;
  } catch (error) {
    console.error("Error in ContestCheckApi:", error);
  }
};

export const ECyanadoJoinApi = async () => {
  try {
    const response = await axios.get(`${API_URL}/challenge/point/1/reviews`);
    return response.data;
  } catch (error) {
    console.log("Error in ECyanadoJoinApi: " + error);
  }
};

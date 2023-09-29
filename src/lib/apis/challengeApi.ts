import axios from "axios";
import { API_URL } from "./base";

export const ContestCheckApi = async () => {
  try {
    const response = await axios.get(`${API_URL}/challenge/reward/1`);
    return response.data;
  } catch (error) {
    console.error("Error in ContestCheckApi:", error);
  }
};

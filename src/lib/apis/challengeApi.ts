import axios from "axios";
import { API_URL } from "./base";
import { getCookie } from "@/utils/Cookie";

export const ContestCheckApi = async () => {
  try {
    const response = await axios.get(`${API_URL}/challenge/reward/1`);
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
    return response.data;
  } catch (error) {
    console.error('Failed to register delivery:', error);
    throw error;
  }
};
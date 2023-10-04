import axios from 'axios';
import { API_URL } from './base';
import { getCookie } from '@/utils/Cookie';

export const createPetProfile = async (data:any) => {
  try {
    const response = await axios.post(
      `${API_URL}/member/main/pet/add`,
      data,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: getCookie('jwtToken')
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error('펫 프로필 추가 api 오류',error);
  }
}

export const modifyPetProfile = async (data:any) => {
  try {
    const response = await axios.put(
      `${API_URL}/member/main/pet/update`,
      data,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: getCookie('jwtToken')
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error('펫 프로필 수정 api 오류',error);
  }
}

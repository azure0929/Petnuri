import axios from 'axios';

export const createPetProfile = async (data) => {
  try {
    const response = await axios.post(
      `${clientInstance.defaults.baseURL}/api/pet-profiles`,
      data,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error('펫 프로필 추가 api 오류',error);
  }
}

export const modifyPetProfile = async (data) => {
  try {
    const response = await axios.put(
      `${clientInstance.defaults.baseURL}/api/pet-profiles`,
      data,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error('펫 프로필 수정 api 오류',error);
  }
}

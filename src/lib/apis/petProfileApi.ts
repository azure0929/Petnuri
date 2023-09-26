import axios from 'axios';

export const createPetProfile = async (data) => {
  try {
    const response = await axios.post(
      `${clientInstance.defaults.baseURL}/api/pet-profiles`,
      data,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${accessToken}`
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

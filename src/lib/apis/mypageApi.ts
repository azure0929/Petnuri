import axios from 'axios';
import { API_URL } from './base';

const api = axios.create({
  baseURL: 'http://3.34.154.62:8080',
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0MjIxMTEzQHRlc3QuY29tIiwiZXhwIjoxNjk2NTExNjIyLCJpZCI6OTYsInJvbGUiOiJVU0VSIn0.X_k-x63UdEpOr97wHd2USZEjumir7vng8CHyICRF5XM',
  },
});

export const getMypage = async () => {
  try {
    const res = await api.get('/member/mypage');
    console.log('res:', res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const editProfile = async (nickname: string, img: File | undefined) => {
  try {
    const formData = new FormData();

    if (img) {
      const fileBlob = new Blob([img], { type: img.type });
      formData.append('file', fileBlob);
    }
    // } else {
    //   formData.append('file', 'null');
    // }

    formData.append(
      'nickname',
      new Blob([JSON.stringify({ nickname: nickname })], {
        type: 'application/json',
      })
    );
    //formData.append('nickname', nickname);
    console.log(11111111111);

    /*const res = await api.put('/member/mypage/profile', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });*/

    const res = await axios.put(
      'http://3.34.154.62:8080/member/mypage/profile',
      formData,
      {
        headers: { 'Content-Type': 'multipart/form-data' },
      }
    );

    //const res = await api.put('/member/mypage/profile', { nickname: nickname });
    console.log('res:', res);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const withdraw = async () => {
  try {
    const res = await api.delete('/member/mypage/withdraw');
    console.log('res:', res);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const logout = async () => {
  try {
    const res = await api.post('/member/logout');
    console.log('res:', res);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const nickCheck = async (nickname: string) => {
  try {
    const res = await api.get(`/auth/nickname?nickname=${nickname}`);
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
  }
};

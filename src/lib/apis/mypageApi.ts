import axios from 'axios';
import { API_URL } from './base';

const api = axios.create({
  baseURL: 'https://petnuri.shop',
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0MjIxMTEzNTVAdGVzdC5jb20iLCJleHAiOjE2OTY1MjAzMzIsImlkIjoxMDYsInJvbGUiOiJVU0VSIn0.DbKLmpTz3Qilu7UwsHFJJ6VPxklTGmCixJQm_PmHqpI',
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
      'https://petnuri.shop/member/mypage/profile',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0MjIxMTEzNTVAdGVzdC5jb20iLCJleHAiOjE2OTY1MjAzMzIsImlkIjoxMDYsInJvbGUiOiJVU0VSIn0.DbKLmpTz3Qilu7UwsHFJJ6VPxklTGmCixJQm_PmHqpI',
        },
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

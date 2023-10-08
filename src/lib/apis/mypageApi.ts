import axios from 'axios';
import { API_URL } from './base';
import { getCookie, removeCookie } from '@/utils/Cookie';

const api = axios.create({
  baseURL: API_URL
});

export const getMypage = async () => {
  try {
    const res = await api.get('/member/mypage');
    console.log('res:', res);
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
    if (nickname != '') {
      formData.append(
        'nickname',
        new Blob([JSON.stringify({ nickname: nickname })], {
          type: 'application/json',
        })
      );
    }

    const res = await axios.put(
      'https://petnuri.shop/member/mypage/profile',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: getCookie('jwtToken'),
        },
      }
    );
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const withdraw = async () => {
  try {
    const KAKAO_UNLINK_URI = 'https://kapi.kakao.com/v1/user/unlink';
    const kakaoToken = localStorage.getItem('kakaoAccessToken');

    await axios.post(
      KAKAO_UNLINK_URI,
      {}, // 빈 바디
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: `Bearer ${kakaoToken}`,
        },
      }
    );

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
    removeCookie('jwtToken');
    return res;
  } catch (error) {
    console.log(error);
  }
};

// 닉네임 중복 체크
export const nickCheck = async ( nickname: string ) => {
  try {
    const response = await api.get("/auth/nickname", {
      params: { nickname },
    });
    return response;
  } catch (error) {
    console.error("중복체크 실패", error);
    throw error;
  }
};

import axios from 'axios';
import { API_URL } from './base';
import { getCookie, removeCookie } from '@/utils/Cookie';

const api = axios.create({
  baseURL: API_URL
});

export const getMypage = async () => {
  try {
    const res = await api.get('/member/mypage', {
      headers: {
        Authorization: getCookie("jwtToken"),
      }
    });
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
    const kakaoToken = localStorage.getItem('kakaoToken');
    const unlink_res = await axios.post(
      KAKAO_UNLINK_URI,
      {}, 
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: `Bearer ${kakaoToken}`,
        },
      }
    );
    if (unlink_res.status !== 200) {
      throw new Error('카카오계정 탈퇴 실패');
    }
    const res = await api.delete('/member/mypage/withdraw',{
      headers:{
        Authorization: getCookie('jwtToken')
      }
    });
    if (res.status !== 200) {
      throw new Error('펫누리 탈퇴 실패');
    }
    removeCookie('jwtToken')
   return res;
  } catch (error) {
     console.log(error);
     throw error; 
  }
};

export const logout = async () => {
  try {
    const res = await api.post('/member/logout',{},{
      headers:{
        Authorization: getCookie('jwtToken')
      }
    })
    removeCookie('jwtToken')
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

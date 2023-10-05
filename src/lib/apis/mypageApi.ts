import axios from 'axios';
import { API_URL } from './base';

const api = axios.create({
  baseURL: 'http://3.34.154.62:8080',
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0MjJAdGVzdC5jb20iLCJleHAiOjE2OTY0OTI0ODUsImlkIjo3Mywicm9sZSI6IlVTRVIifQ.Dxmmw1xCeqLq8HWEIWiirPGfEQbyUEuHv209vwL4E7o',
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

export const editProfile = async () => {
  try {
    const res = await api.put('/member/mypage/profile');
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

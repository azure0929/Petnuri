import axios  from "axios";
import { API_URL } from "./base";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// 로그인
export const login = async ({ code }: Login) => {
  try {
    const response = await api.post("auth/kakao/login", code);
    return response;
  } catch (error) {
    console.log(error);
  }
};

// 회원가입
export const join = async ({ email, nickname, referralCode, isAgreed }: Join) => {
  try {
    const response = await api.post("/auth/join", { email, nickname, referralCode, isAgreed });
    console.log("회원가입 응답 데이터:", response.data);
    return response;
  } catch (error) {
    console.error("회원가입 실패", error);
    throw error;
  }
};

// 닉네임 중복 체크
export const checknickname = async ({ nickname }: CheckNickname) => {
  try {
    const response = await api.post("/member/nickname", { nickname });
    console.log("중복체크 응답 데이터:", response.data);
    return response;
  } catch (error) {
    console.error("중복체크 실패", error);
    throw error;
  }
};

// 추천인 코드 체크
export const checkreferralCode = async ({ referralCode }: CheckreferralCode) => {
  try {
    const response = await api.post("/member/nickname", { referralCode });
    console.log("추천인코드 응답 데이터:", response.data);
    return response;
  } catch (error) {
    console.error("추천인코드 확인 실패", error);
    throw error;
  }
};

// 펫 정보 등록
export const petInfo = async ({ species, petName, breed, petGender, petAge }: PetInfo) => {
  try {
    const response = await api.post("/member/nickname", { species, petName, breed, petGender, petAge });
    console.log("펫 정보 등록 데이터:", response.data);
    return response;
  } catch (error) {
    console.error("펫 정보 등록 실패", error);
    throw error;
  }
};

// 로그인
export interface Login {
  code: string;
}
export interface LoginResponse {
  jwtToken: null | string;
  refreshToken: null | string;
  kakaoAccessToken: string;
  email: string;
}

// 회원가입
export interface Join {
  email: string;
  nickname: string;
  referralCode: string;
  isAgreed: boolean;
}
export interface LogoutResponse {
  id: number;
  email: string;
  nickname: string;
  jwtToken: string;
  refreshToken: string;
}

// 닉네임 중복 체크
export interface CheckNickname {
  nickname: string;
}
export interface CheckNicknameResponse {
  nickname: string;
  isExists: boolean;
}

// 추천인 코드 확인
export interface CheckreferralCode {
  referralCode: string;
}
export interface CheckreferralCodeResponse {
  referralCode: string;
  isExists: boolean;
}

// 펫 정보 등록
export interface PetInfo {
  species: string;
  petName: string;
  breed: string;
  petGender: string;
  petAge: number;
}
export interface PetInfoResponse {
  message: string;
}
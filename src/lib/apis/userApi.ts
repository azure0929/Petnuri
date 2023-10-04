import axios  from "axios";
import { API_URL } from "./base";

const api = axios.create({
  baseURL: API_URL,
});

// 회원가입
export const join = async ({ email, nickname, isAgreed, referral }: Join) => {
  try {
    const response = await api.post("/auth/join", { email, nickname, isAgreed, referral });
    console.log("회원가입 응답 데이터:", response.data);
    return response;
  } catch (error) {
    console.error("회원가입 실패", error);
    throw error;
  }
};

// 닉네임 중복 체크
export const checkNickname = async ({ nickname }: CheckNickname) => {
  try {
    const response = await axios.get("/auth/nickname", {
      params: { nickname },
    });
    console.log("중복체크 응답 데이터:", response.data);
    return response;
  } catch (error) {
    console.error("중복체크 실패", error);
    throw error;
  }
};

// 추천인 코드 체크
export const checkReferral = async ({ referral }: Checkreferral) => {
  try {
    const response = await axios.get("/auth/referral", {
      params: { referral },
    });
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

// 홈 페이지 불러오기 
export const HomeApi = async () => {
  try {
    const response = await axios.get(`${API_URL}/member/main`);
    return response.data;
  } catch (error) {
    console.error("Error in HomeApi:", error);
  }
};

// 회원가입
export interface Join {
  email: string;
  nickname: string;
  referral?: string;
  isAgreed: boolean;
}

// 로그아웃
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
export interface Checkreferral {
  referral: string;
}
export interface CheckreferralResponse {
  referral: string;
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
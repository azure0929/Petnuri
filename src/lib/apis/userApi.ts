import axios, { AxiosResponse } from "axios";
import { API_URL } from "./base";

const api = axios.create({
  baseURL: API_URL,
});


// 로그인
export const login = async (code: string) => {
  try {
    const response = await api.post("/auth/kakao/login", 
    { code }, {
      headers: {
        Authorization: `Bearer ${code}`
      }
    });

    return response;
  } catch (error) {
    console.error("로그인 실패", error);
    throw error;
  }
}

// 회원가입
export const join = async (request: SignUpRequest): Promise<AxiosResponse<SignUpResponse>> => {
  try {
    const response: AxiosResponse<SignUpResponse> = await api.post("/auth/join", request);
    return response;
  } catch (error) {
    console.error("회원가입 실패", error);
    throw error;
  }
};

// 닉네임
export const checknickname = async (nickname: string): Promise<AxiosResponse<NicknameResponse>> => {
  try {
    const response: AxiosResponse<NicknameResponse> = await api.get("/member/nickname", { params: { nickname } });
    return response;
  } catch (error) {
    console.error("중복확인 실패", error);
    throw error;
  }
};

// 추천인 코드
export const checkreferralCode = async (referralCode: string): Promise<AxiosResponse<ReferralCodeResponse>> => {
  try {
    const response: AxiosResponse<ReferralCodeResponse> = await api.get("/member/referralCode", { params: { referralCode } });
    return response;
  } catch (error) {
    console.error("추천인 코드 확인 실패", error);
    throw error;
  }
};

// 펫 등록
export const petRegistration = async (request: PetRegistrationRequest): Promise<AxiosResponse<PetRegistrationResponse>> => {
  try {
    const response: AxiosResponse<PetRegistrationResponse> = await api.post("/member/pet", request);
    return response;
  } catch (error) {
    console.error("펫 등록 실패", error);
    throw error;
  }
};

// 회원가입
export interface SignUpRequest {
  email: string;
  nickname: string;
  referralCode?: string;
  isAgreed: boolean;
}

export interface SignUpResponse {
  id: number;
  email: string;
  nickname: string;
  jwtToken: string;
  refreshToken: string;
}

// 닉네임
export interface NicknameResponse {
  nickname: string;
  isExists: boolean;
}

// 추천인 코드
export interface ReferralCodeResponse {
  referralCode: string;
  isExists: boolean;
}

// 펫 등록
export interface PetRegistrationRequest {
  species: string;
  petName: string;
  breed: string;
  gender: string;
  petAge: number;
  jwtToken: string;
}

export interface PetRegistrationResponse {
  message: string;
}

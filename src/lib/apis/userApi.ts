import axios  from "axios";
import { API_URL } from "./base";
import { getCookie } from "@/utils/Cookie";

const api = axios.create({
  baseURL: API_URL,
});

//로그인
export const login = async (code:string | null) => {
  try {
    const response = await axios.get(`${API_URL}/auth/kakao/login`,
      {params: { code }}
    )
    return response
  } catch (error) {
    console.log('로그인 api 에러',error);
  }
}

// 회원가입
export const join = async ({ email, nickname, isAgreed, referralCode }: Join) => {
  try {
    const response = await api.post("/auth/join", { email, nickname, isAgreed, referralCode });
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
export const checkReferral = async ({ referralCode }: Checkreferral) => {
  try {
    const response = await axios.get("/auth/referral", {
      params: { referralCode },
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

export const registerPet = async ({ species, petName, breed, petGender, petAge }: PetInfo) => {
  try {
    const response = await axios.post(`${API_URL}/member/pet`, 
    { species, petName, breed, petGender, petAge }, {
      headers:{
        'Authorization': getCookie('jwtToken')
      }
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};

// 홈 페이지 불러오기 
export const HomeApi = async () => {
  try {
    const response = await axios.get(`${API_URL}/member/main`, {
      headers: {
        Authorization: getCookie('jwtToken')
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error in HomeApi:", error);
  }
};

// 회원가입
export interface Join {
  email: string;
  nickname: string;
  referralCode: string;
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
  referralCode: string;
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
  petAge: number | null;
}
export interface PetInfoResponse {
  message: string;
}
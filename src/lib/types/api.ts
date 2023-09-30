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
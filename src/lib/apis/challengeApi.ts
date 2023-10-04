import axios from "axios";
import { API_URL } from "./base";

// 집사대회 api
export const ContestCheckApi = async () => {
  try {
    const response = await axios.get(`${API_URL}/challenge/reward/1`);
    return response.data;
  } catch (error) {
    console.error("Error in ContestCheckApi: " + error);
  }
};
// 집사대회 참여현황 api
export const ContestJoinApi = async () => {
  try {
    const response = await axios.get(
      `${API_URL}/challenge/reward/1/join/other`
    );
    if(response.status > 300) {
      throw new Error('기록 작성에 실패하셨습니다.')
    }
    return response.data;
  } catch (error) {
    throw error
    // throw error; // 에러 throw
  }
};

// 집사대회 참여신청 api
export const ContestReviewApi = async (
  accessToken: string,
  imageFile: File,
  content: string
) => {
  try {
    const formData = new FormData();
    formData.append("file", imageFile);

    const headers = {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "multipart/form-data",
    };

    await axios.post(`${API_URL}/challenge/point/1/review`, formData, {
      headers,
    });

    const request = { content };

    await axios.post(`${API_URL}/challenge/point/1/review`, request, {
      headers,
    });

  } catch (error) {
    throw error
  }
};

// 야너도? 야 너도!
export const ECyanadoCheckApi = async () => {
  try {
    const response = await axios.get(`${API_URL}/challenge/point/1`);
    return response.data;
  } catch (error) {
    console.error("Error in ContestCheckApi:", error);
  }
};

// 야너도?야나도 내 참여 현황
export const ECyanadoJoinApi = async () => {
  try {
    const response = await axios.post(`${API_URL}/challenge/point/1/reviews`);
    return response.data;
  } catch (error) {
    console.log("Error in ECyanadoJoinApi: " + error);
  }
};

// 야너도?야나두 참여신청
export const ECyanadoReviewApi = async (imageFile: File, content: string) => {
  try {
    const formData = new FormData();
    formData.append("file", imageFile); // 파일 추가
    formData.append("content", content); // JSON 데이터 추가

  //   const getCookie = function(name: string) {
  //     var value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
  //     return value? value[2] : null;
  // };

    const locakStorageToken = localStorage.getItem('token')
    
    const headers = {
      Authorization: `${locakStorageToken}`,
    };

    console.log(locakStorageToken)

    await axios.post(`${API_URL}/challenge/point/1/review`, formData, {
      headers,
    });

  } catch (error) {
    console.error("Error in ECyanadoReviewApi: " + error);
  }
};

// 데일리 이벤트 - 간식주기 조회
export const dailyChallenge1Api = async() => {
  try {
    const response = await axios.get(`${API_URL}/challenge/daily/1`)
    return response.data
  } catch (error) {
    console.error("Error in dailyChallange1Api: " + error)
  }
}

// 데일리 이벤트 - 간식주기 참여자 조회
export const daily1JoinListApi = async() => {
  try{
    const response = await axios(`${API_URL}/challenge/daily/1/auth`)
    return response.data
  }catch(error){
    console.error("Error in daily3JoinListApi: " + error)
  }
}

// 데일리 이벤트 - 간식주기 참여신청
export const dailyReviewApi = async (imageFile: File) => {
  try {
    const formData = new FormData();
    formData.append("file", imageFile); // 파일 추가

    const locakStorageToken = localStorage.getItem('token')
    
    const headers = {
      Authorization: `${locakStorageToken}`,
    };

    await axios.post(`${API_URL}/challenge/daily/1`, formData, {
      headers,
    })
    
  } catch (error) {
    throw error
  }
}

// 데일리 이벤트 - 놀아주기 조회
export const dailyChallenge2Api = async () => {
  try {
    const response = await axios.get(`${API_URL}/challenge/daily/2`)
    return response.data
  } catch (error ) {
    console.error("Error in dailyChallenge2Api: " + error)
  }
}

// 데일리 이벤트 - 놀아주기 참여자 조회
export const daily2JoinListApi = async () => {
  try {
    const response = await axios.get(`${API_URL}/challenge/daily/2/auth`)
    return response.data
  } catch (error) {
    console.error("Error in daily2JoinListApi: " + error)
  }
}

// 데일리 이벤트 - 위생관리 조회
export const dailyChallenge3Api = async() => {
  try {
    const response = await axios.get(`${API_URL}/challenge/daily/3`)
    return response.data
  } catch (error) {
    console.error("Error in dailyChallenge3Api: " + error)
  }
}

// 데일리 이벤트 - 위생관리 참여자 조회
export const daily3JoinListApi = async() => {
  try {
    const response = await axios.get(`${API_URL}/challenge/daily/3/auth`)
    return response.data
  } catch (error) {
    console.error("Error in daily3JoinListApi: " + error)
  }
}


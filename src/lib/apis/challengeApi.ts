import axios from "axios";
import { API_URL } from "./base";
import { getCookie } from "@/utils/Cookie";

// 토큰 임시 값
const locakStorageToken =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0MTAwMTIiLCJleHAiOjE2OTY0NDQzMzMsImlkIjo1Mywicm9sZSI6IlVTRVIifQ.BFSpWK-pqTwtiW-_Ci87aC9Tcl7z_jV2WkEGvaU-l5Q";
// const token = localstorage.getItem('jwtToken')
// const locakStorageToken = `Bearer ${token}`

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
    return response.data;
  } catch (error) {
    console.error("Error in ContestJoinApi: " + error);
  }
};

// 집사대회 참여신청 api
// export const ContestReviewApi = async (
//   accessToken: string,
//   imageFile: File,
//   content: string
// ) => {
//   try {
//     const formData = new FormData();
//     formData.append("file", imageFile);

//     const headers = {
//       Authorization: `Bearer ${accessToken}`,
//       "Content-Type": "multipart/form-data",
//     };

//     await axios.post(`${API_URL}/challenge/point/1/review`, formData, {
//       headers,
//     });

//     const request = { content };

//     await axios.post(`${API_URL}/challenge/point/1/review`, request, {
//       headers,
//     });
//   } catch (error) {
//     throw error;
//   }
// };

// 야너도? 야 너도!
export const ECyanadoCheckApi = async () => {
  try {
    const response = await axios.get(`${API_URL}/challenge/point/1`);
    return response.data;
  } catch (error) {
    console.error("Error in ContestCheckApi:", error);
  }
};

export const YanadoCheckApi = async () => {
  try {
    const response = await axios.get(`${API_URL}/challenge/point/1`);
    return response.data;
  } catch (error) {
    console.error("Error in YanadoCheckApi:", error);
  }
};

export const DeliveryListApi = async () => {
  try {
    const response = await axios.get(`${API_URL}/delivery/address`, {
      headers: {
        Authorization: getCookie("jwtToken"),
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error in YanadoCheckApi:", error);
  }
};

export const DeliveryRegApi = async (deliveryInfo: any) => {
  try {
    const response = await axios.post(
      `${API_URL}/delivery/address`,
      deliveryInfo,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: getCookie("jwtToken"),
        },
      }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Failed to register delivery:", error);
    throw error;
  }
};

export const DeliveryUpdateApi = async (deliveryInfo: any) => {
  try {
    const response = await axios.put(
      `${API_URL}/delivery/address`,
      deliveryInfo,
      {
        headers: {
          Authorization: getCookie("jwtToken"),
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const DeliveryTrueUpdateApi = async (item: Privacy) => {
  const response = await axios.put(
    `${API_URL}/delivery/address`,
    {
      id: item.id,
      name: item.name,
      phone: item.phone,
      roadAddress: item.roadAddress,
      address: item.address,
      zipcode: item.zipcode,
      isBased: true,
    },
    {
      headers: {
        Authorization: getCookie("jwtToken"),
      },
    }
  );
  return response.data;
};

export const DeliveryDelApi = async (deliveryAddressId: number) => {
  try {
    const response = await axios.delete(
      `${API_URL}/delivery/address/${deliveryAddressId}`,
      {
        headers: {
          Authorization: getCookie("jwtToken"),
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Failed to delete delivery address:", error);
    throw error;
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
export const ECyanadoReviewApi = async (
  imageFile: File,
  content: string,
  petType: string
) => {
  try {
    // 파일 Blob 생성
    const fileBlob = new Blob([imageFile], { type: imageFile.type });

    // JSON 데이터 Blob 생성
    const requestData = {
      petType,
      content,
    };
    const requestBlob = new Blob([JSON.stringify(requestData)], {
      type: "application/json",
    });

    // FormData에 Blob 추가
    const formData = new FormData();
    formData.append("file", fileBlob, "file.png");
    formData.append("request", requestBlob);

    const headers = {
      Authorization: locakStorageToken,
      "Content-Type": "application/octet-stream",
    };

    await axios.post(`${API_URL}/challenge/point/1/review`, formData, {
      headers,
    });
    // const response = await axios.post(
    //   `${API_URL}/challenge/point/1/review`,
    //   formData,
    //   {
    //     headers,
    //   }
    // );

    // if (response.status === 400) {
    //   console.log(response);
    // }
  } catch (error) {
    console.error(error);
  }
};

// 데일리 이벤트 - 간식주기 조회
export const dailyChallenge1Api = async () => {
  try {
    const response = await axios.get(`${API_URL}/challenge/daily/1`);
    return response.data;
  } catch (error) {
    console.error("Error in dailyChallange1Api: " + error);
  }
};

// 데일리 이벤트 - 간식주기 참여자 조회
export const daily1JoinListApi = async () => {
  try {
    const response = await axios(`${API_URL}/challenge/daily/1/auth`);
    return response.data;
  } catch (error) {
    console.error("Error in daily3JoinListApi: " + error);
  }
};

// 데일리 이벤트 - 놀아주기 조회
export const dailyChallenge2Api = async () => {
  try {
    const response = await axios.get(`${API_URL}/challenge/daily/2`);
    return response.data;
  } catch (error) {
    console.error("Error in dailyChallenge2Api: " + error);
  }
};

// 데일리 이벤트 - 놀아주기 참여자 조회
export const daily2JoinListApi = async () => {
  try {
    const response = await axios.get(`${API_URL}/challenge/daily/2/auth`);
    return response.data;
  } catch (error) {
    console.error("Error in daily2JoinListApi: " + error);
  }
};

// 데일리 이벤트 - 위생관리 조회
export const dailyChallenge3Api = async () => {
  try {
    const response = await axios.get(`${API_URL}/challenge/daily/3`);
    return response.data;
  } catch (error) {
    console.error("Error in dailyChallenge3Api: " + error);
  }
};

// 데일리 이벤트 - 위생관리 참여자 조회
export const daily3JoinListApi = async () => {
  try {
    const response = await axios.get(`${API_URL}/challenge/daily/3/auth`);
    return response.data;
  } catch (error) {
    console.error("Error in daily3JoinListApi: " + error);
  }
};
// 데일리 이벤트 -  참여신청
export const dailyReviewApi = async (imageFile: File, id: number) => {
  try {
    // 파일 Blob 생성
    const fileBlob = new Blob([imageFile], { type: imageFile.type });

    // FormData에 Blob 추가
    const formData = new FormData();
    formData.append("file", fileBlob, "file.png");

    const headers = {
      Authorization: locakStorageToken,
      "Content-Type": "application/octet-stream",
    };

    await axios.post(`${API_URL}/challenge/daily/${id}`, formData, {
      headers,
    });
    const response = await axios.post(
      `${API_URL}/challenge/point/1/review`,
      formData,
      {
        headers,
      }
    );

    if (response.status > 300) {
      console.log(response.status);
    }
  } catch (error) {
    console.error("Error in daily1ReviewApi: " + error);
  }
};

//데일리 전체 조회
export const dailyAllListApi = async () => {
  try {
    const response = await axios.get(`${API_URL}/challenge/daily`);
    return response.data;
  } catch (error) {
    console.error("Error in dailyAllListApi: " + error);
  }
};

import axios from "axios";
import { API_URL } from "./base";
import { getCookie } from "@/utils/Cookie";

// 토큰 임시 값
// const locakStorageToken =
const locakStorageToken = getCookie("jwtToken");

// 집사대회 api
export const ContestCheckApi = async () => {
  try {
    const response = await axios.get(`${API_URL}/challenge/reward/1`);
    return response.data;
  } catch (error) {
    console.error("Error in ContestCheckApi: " + error);
  }
};
// 집사대회 다른 사람 참여현황 api
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

//집사대회 내 참여현황
export const joinCheckApi = async () => {
  try {
    const headers = {
      Authorization: locakStorageToken,
    };

    const response = await axios.get(`${API_URL}/challenge/reward/1/join/my`, {
      headers,
    });

    return response;
  } catch (error) {
    console.error("Error in joinCheckApi: " + error);
    return "join";
  }
};

// 집사대회 참여신청 api
export const ContestParticipationApi = async (deliveryData: any) => {
  try {
    const headers = {
      Authorization: locakStorageToken,
    };
    await axios.post(`${API_URL}/challenge/reward/1/join`, deliveryData, {
      headers,
    });
  } catch (error) {
    console.error("Error in ContestParticipationApi: " + error);
  }
};

// 야너도? 야 너도!
export const ECyanadoCheckApi = async () => {
  try {
    const response = await axios.get(`${API_URL}/challenge/point/1`, {
      headers: {
        Authorization: locakStorageToken,
      },
    });
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

export const rewardApi = async () => {
  try {
    const response = await axios.get(`${API_URL}/challenge/reward/1/product`);
    return response.data;
  } catch (error) {
    console.error("Error in rewardApi: " + error);
  }
};

export const DeliveryListApi = async () => {
  try {
    const response = await axios.get(`${API_URL}/delivery/address`, {
      headers: {
        // Authorization: getCookie("jwtToken"),
        Authorization: locakStorageToken,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error in DeliveryListApi:", error);
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
          // Authorization: getCookie("jwtToken"),
          Authorization: locakStorageToken,
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
          // Authorization: getCookie("jwtToken"),
          Authorization: locakStorageToken,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const DeliveryTrueUpdateApi = async (item: any) => {
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
    const headers = {
      Authorization: locakStorageToken,
    };

    const response = await axios.get(`${API_URL}/challenge/point/1/reviews`, {
      headers,
    });
    return response.data;
  } catch (error) {
    console.log("Error in ECyanadoJoinApi: " + error);
  }
};

// 야너도?야나두 참여신청
export const ReviewApi = async (
  imageFile: File,
  content: string,
  petType: string,
  eventName: string,
  id: number
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

    await axios.post(
      `${API_URL}/challenge/${eventName}/${id}/review`,
      formData,
      {
        headers,
      }
    );
  } catch (error) {
    console.error(error);
  }
};

// 데일리 이벤트 - 간식주기 조회
export const dailyChallenge1Api = async () => {
  try {
    const response = await axios.get(`${API_URL}/challenge/daily/1`, {
      headers: {
        Authorization: locakStorageToken,
      },
    });
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
    const response = await axios.get(`${API_URL}/challenge/daily/2`, {
      headers: {
        Authorization: locakStorageToken,
      },
    });
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
    const response = await axios.get(`${API_URL}/challenge/daily/3`, {
      headers: {
        Authorization: locakStorageToken,
      },
    });
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
    // const response = await axios.post(
    //   `${API_URL}/challenge/point/1/review`,
    //   formData,
    //   {
    //     headers,
    //   }
    // );

    // if (response.status > 300) {
    //   console.log(response.status);
    // }
  } catch (error) {
    console.error("Error in daily1ReviewApi: " + error);
  }
};

//데일리 전체 조회
export const dailyAllListApi = async () => {
  try {
    const response = await axios.get(`${API_URL}/challenge/daily`, {
      headers: {
        Authorization : getCookie('jwtToken')
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error in dailyAllListApi: " + error);
  }
};

//포인트 샵
export const pointApi = async () => {
  try {
    const response = await axios.get(`${API_URL}/point/get`, {
      headers: {
        Authorization: getCookie("jwtToken"),
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error in dailyAllListApi: " + error);
  }
};

//출석체크
export const checkApi = async () => {
  try {
    const response = await axios.get(`${API_URL}/point/attendance`,{
      headers: {
        Authorization: getCookie("jwtToken"),
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error in checkApi: " + error);
    throw error;
  }
};

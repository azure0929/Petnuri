import axios from "axios";
import { API_URL } from "./base";

//펫톡 전체 리스트
export const allList = async (petType: string) => {
  try {
    const response = await axios.get(
      `${API_URL}/pet-talk?pet=${petType}&order=BEST`
    );
    return response.data.petTalkPosts;
  } catch (error) {
    console.error("no List:", error);
  }
};

//펫톡 고민상담 리스트
export const concernList = async (
  petType: string,
  mainCategory: number,
  subCategory: number
) => {
  try {
    const response = await axios.get(
      `${API_URL}/pet-talk?pet=${petType}&order=BEST&mainCategory=${mainCategory}&subCategory=${subCategory}`
    );
    return response.data.petTalkPosts;
  } catch (error) {
    console.error("no List:", error);
  }
};

//펫톡 자유수다 리스트
export const freetalkList = async (petType: string, mainCategory: number) => {
  try {
    const response = await axios.get(
      `${API_URL}/pet-talk?pet=${petType}&order=BEST&mainCategory=${mainCategory}&subCategory`
    );
    return response.data.petTalkPosts;
  } catch (error) {
    console.error("no List:", error);
  }
};

//펫톡 상세조회
export const pettalkDetail = async (petTalkId: number) => {
  try {
    const response = await axios.get(`${API_URL}/pet-talk/${petTalkId}`);
    return response.data;
  } catch (error) {
    console.error("no List:", error);
  }
};

//펫톡 댓글 조회
export const pettalkReply = async (petTalkId: number) => {
  try {
    const response = await axios.get(`${API_URL}/pet-talk/${petTalkId}/replys`);
    return response;
  } catch (error) {
    console.error("no List:", error);
  }
};

interface WritingOutParams {
  accessToken: string;
  image?: File;
  request: object;
}

//펫톡 게시글 작성
export const writingOut = async ({
  accessToken,
  image,
  request,
}: WritingOutParams) => {
  try {
    const formData = new FormData();

    if (image) {
      formData.append("image", image);
    }

    // formData.append("request", JSON.stringify(request));

    formData.append(
      "request",
      new Blob([JSON.stringify(request)], { type: "application/json" })
    );

    const response = await axios.post(`${API_URL}/pet-talk`, formData, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "multipart/form-data",
      },
    });

    console.log("성공", response.data);
    return response.data;
  } catch (error) {
    console.error("실패", error);
    throw error;
  }
};

//펫톡 게시글 이모지 추가
export const emojiPost = async ({
  accessToken,
  petTalkId,
  emojiType,
}: {
  accessToken: string;
  petTalkId: number;
  emojiType: string;
}) => {
  try {
    const response = await axios.post(
      `${API_URL}/pet-talk/${petTalkId}/emotion`,
      { emoji: emojiType },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    console.log("성공", response.data);
    return response.data;
  } catch (error) {
    console.error("실패", error);
    throw error;
  }
};

//펫톡 게시글 이모지 삭제
export const emojiDelete = async ({
  accessToken,
  petTalkId,
  emojiType,
}: {
  accessToken: string;
  petTalkId: number;
  emojiType: string;
}) => {
  try {
    const response = await axios.delete(
      `${API_URL}/pet-talk/${petTalkId}/emotion?emoji=${emojiType}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    console.log("성공", response.data);
    return response.data;
  } catch (error) {
    console.error("실패", error);
    throw error;
  }
};

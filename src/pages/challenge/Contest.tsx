import Background from "@/components/Background";
import MainTab from "@/components/MainTab";
import ChallengeHead from "@/components/challenge/ChallengeHead";
import ChallengeBanner from "@/components/challenge/ChallengeBanner";
import ChallengeContents from "@/components/challenge/ChallengeContents";
import ChallengeJoin from "@/components/challenge/ChallengeJoin";
import JoinButton from "@/components/challenge/JoinButton";
import DeliveryBS from "./deliverybs/DeliveryBS";
import { useEffect, useState } from "react";
import JoinComplete from "@/components/challenge/JoinComplete";

interface ContestT {
  title: string;
  thumbnail: string;
  kit_start_date: string;
  kit_end_date: string;
  process: string;
}

const Contest = () => {
  const [contestData, setContestData] = useState<ContestT | null>(null);
  useEffect(() => {
    const contestApi = async () => {
      try {
        const response = await fetch("/Cheonha.json");
        const data = await response.json();
        setContestData(data);
      } catch (error) {
        console.error("contestApi Error : " + error);
      }
    };
    contestApi();
  }, []);

  const head: challengeHead = {
    head: "천하제일 집사대회",
  };

  const banner: challengeBanner = {
    bannerImg: "https://www.naver.com",
  };

  const contents: challengeContents = {
    mainTitle: "천하제일 집사대회",
    subTitle: "천하제일 집사대회",
    howTitle: "인증방법",
    howInfo: "인증사진 업로드",
    periodTitle: "진행기간",
    periodInfo: "1일",
    pointTitle: "포인트 지급",
    pointInfo: "참여완료시 바로 지급",
  };

  const join: challengeJoin = {
    participantsTitle: "다른 집사들도 참여중이에요!",
    participantsImg: "이미지",
    participantsName: "아이디",
  };

  let renderButton;
  if (contestData !== null && contestData.process === "unprocessed") {
    renderButton = <JoinButton />;
  } else if (contestData !== null && contestData.process === "processed") {
    renderButton = <JoinComplete />;
  } else if (contestData !== null && contestData.process === "unjoin") {
    renderButton = <div>인증하기</div>;
  } else if (contestData !== null && contestData.process === "join") {
    renderButton = <div>인증완료</div>;
  }

  return (
    <>
      <Background>
        <ChallengeHead head={head} />
        <ChallengeBanner banner={banner} />
        <ChallengeContents contents={contents} />
        <ChallengeJoin join={join} />
        {renderButton}
        <DeliveryBS />
        <MainTab />
      </Background>
    </>
  );
};

export default Contest;

import Background from "@/components/Background";
import MainTab from "@/components/MainTab";
import ChallengeHead from "@/components/challenge/ChallengeHead";
import ChallengeBanner from "@/components/challenge/ChallengeBanner";
import ChallengeContents from "@/components/challenge/ChallengeContents";
import ChallengeJoin from "@/components/challenge/ChallengeJoin";
import JoinButton from "@/components/challenge/JoinButton";
import EventSaveBS from "@/components/challenge/EventSaveBS";
import { useState, useEffect } from "react";
import { ECyanadoCheckApi, ECyanadoJoinApi } from "@/lib/apis/challengeApi";

const ECYanado = () => {
  const [yanadoData, setYanadoData] = useState<YanadoData | null>(null);
  const [joinList, setJoinList] = useState<ChallengeJoin | null>(null);

  const filterData = joinList ? joinList.reviews : null;

  useEffect(() => {
    const ecyanadoApi = async () => {
      try {
        const response = await ECyanadoCheckApi();
        setYanadoData(response);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    ecyanadoApi();
  }, []);

  useEffect(() => {
    const joinAPi = async () => {
      try {
        const response = await ECyanadoJoinApi();
        setJoinList(response);
      } catch (error) {
        console.error("joinAPi Error:", error);
      }
    };

    joinAPi();
  }, [yanadoData]);

  const contents: ChallengeContents = {
    mainTitle: yanadoData?.title || "",
    subTitle: yanadoData?.subTitle || "",
    howTitle: "인증방법",
    howInfo: "인증사진 업로드",
    periodTitle: "진행기간",
    periodInfo: "1일",
    pointTitle: "포인트 지급",
    pointInfo: "참여완료시 바로 지급",
  };

  const handleJoinButtonClick = async () => {
    // You can call the daily1 and daily1Join functions here if needed
    try {
      const ECyanadoCheckResponse = await ECyanadoCheckApi();
      const ECyanadoJoinResponse = await ECyanadoJoinApi();
      setYanadoData(ECyanadoCheckResponse);
      setJoinList(ECyanadoJoinResponse.content);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <Background>
        {yanadoData ? (
          <>
            <ChallengeHead head={"야 너도? 야 나두!"} />
            <ChallengeBanner banner={yanadoData.poster} />
            <ChallengeContents contents={contents} />
            <ChallengeJoin joinLists={filterData || []} />
            <JoinButton joinCheck={yanadoData.writtenReviewToday} />
            <EventSaveBS
              eventName="point"
              id={yanadoData.id}
              onHandle={handleJoinButtonClick}
            />
            <MainTab />
          </>
        ) : null}
      </Background>
    </>
  );
};

export default ECYanado;

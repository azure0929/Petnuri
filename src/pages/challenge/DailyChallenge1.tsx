import Background from "@/components/Background";
import MainTab from "@/components/MainTab";
import ChallengeHead from "@/components/challenge/ChallengeHead";
import ChallengeBanner from "@/components/challenge/ChallengeBanner";
import ChallengeContents from "@/components/challenge/ChallengeContents";
import ChallengeJoin from "@/components/challenge/ChallengeJoin";
import JoinButton from "@/components/challenge/JoinButton";
import DailySaveBS from "../../components/challenge/DailySaveBS";
import { useState, useEffect } from "react";
import { daily1JoinListApi, dailyChallenge1Api } from "@/lib/apis/challengeApi";

const DailyChallenge1 = () => {
  const [daily1Data, setDaily1Data] = useState<DailyData>();
  const [joinList, setjoinList] = useState<ChallengeJoin[]>([]);

  useEffect(() => {
    const daily1 = async () => {
      try {
        const response = await dailyChallenge1Api();
        setDaily1Data(response);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    daily1();
  }, []);

  useEffect(() => {
    const daily1Join = async () => {
      try {
        const response = await daily1JoinListApi();
        setjoinList(response.content);
      } catch (error) {
        console.error("Error in daily1Join: " + error);
      }
    };

    daily1Join();
  }, []);

  const contents: ChallengeContents = {
    mainTitle: daily1Data?.title || "",
    subTitle: daily1Data?.subTitle || "",
    howTitle: "인증방법",
    howInfo: daily1Data?.authMethod || "",
    periodTitle: "진행기간",
    periodInfo: "1일",
    pointTitle: "포인트 지급",
    pointInfo: "참여완료시 바로 지급",
  };

  return (
    <>
      <Background>
        {daily1Data ? (
          <>
            <ChallengeHead head={daily1Data.title} />
            <ChallengeBanner banner={daily1Data.banner} />
            <ChallengeContents contents={contents} />
            <ChallengeJoin joinLists={joinList || []} />
            <JoinButton />
            <DailySaveBS id={daily1Data.challengeId} />
            <MainTab />
          </>
        ) : null}
      </Background>
    </>
  );
};

export default DailyChallenge1;

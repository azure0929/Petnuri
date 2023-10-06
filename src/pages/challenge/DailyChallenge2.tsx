import Background from "@/components/Background";
import MainTab from "@/components/MainTab";
import ChallengeHead from "@/components/challenge/ChallengeHead";
import ChallengeBanner from "@/components/challenge/ChallengeBanner";
import ChallengeContents from "@/components/challenge/ChallengeContents";
import ChallengeJoin from "@/components/challenge/ChallengeJoin";
import JoinButton from "@/components/challenge/JoinButton";
import DailySaveBS from "../../components/challenge/DailySaveBS";
import { useState, useEffect } from "react";
import { dailyChallenge2Api, daily2JoinListApi } from "@/lib/apis/challengeApi";

const DailyChallenge2 = () => {
  const [daily2Data, setDaily2Data] = useState<DailyData>();
  const [joinList, setjoinList] = useState<ChallengeJoin[]>([]);

  useEffect(() => {
    const daily2 = async () => {
      try {
        const response = await dailyChallenge2Api();
        setDaily2Data(response);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    daily2();
  }, []);

  useEffect(() => {
    const daily1Join = async () => {
      try {
        const response = await daily2JoinListApi();
        setjoinList(response.content);
      } catch (error) {
        console.error("Error in daily1Join: " + error);
      }
    };

    daily1Join();
  }, []);

  const contents: ChallengeContents = {
    mainTitle: daily2Data?.title || "",
    subTitle: daily2Data?.subTitle || "",
    howTitle: "인증방법",
    howInfo: daily2Data?.authMethod || "",
    periodTitle: "리워드",
    periodInfo: "100P (1일 1회 참여 횟수 제한)",
    pointTitle: "포인트 지급",
    pointInfo: "참여완료 즉시 지급",
  };

  const handleJoinButtonClick = async () => {
    // You can call the daily1 and daily1Join functions here if needed
    try {
      const daily1Response = await dailyChallenge2Api();
      const joinListResponse = await daily2JoinListApi();
      setDaily2Data(daily1Response);
      setjoinList(joinListResponse.content);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <Background>
        {daily2Data ? (
          <>
            <ChallengeHead head={daily2Data.title} />
            <ChallengeBanner banner={daily2Data.banner} />
            <ChallengeContents contents={contents} />
            <ChallengeJoin joinLists={joinList || []} />
            <JoinButton joinCheck={daily2Data.status} />
            <DailySaveBS
              id={daily2Data.challengeId}
              onHandle={handleJoinButtonClick}
            />
            <MainTab />
          </>
        ) : null}
      </Background>
    </>
  );
};

export default DailyChallenge2;

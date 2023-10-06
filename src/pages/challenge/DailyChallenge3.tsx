import Background from "@/components/Background";
import MainTab from "@/components/MainTab";
import ChallengeHead from "@/components/challenge/ChallengeHead";
import ChallengeBanner from "@/components/challenge/ChallengeBanner";
import ChallengeContents from "@/components/challenge/ChallengeContents";
import ChallengeJoin from "@/components/challenge/ChallengeJoin";
import JoinButton from "@/components/challenge/JoinButton";
import DailySaveBS from "../../components/challenge/DailySaveBS";
import { useState, useEffect } from "react";
import { dailyChallenge3Api, daily3JoinListApi } from "@/lib/apis/challengeApi";

const DailyChallenge3 = () => {
  const [daily3Data, setDaily3Data] = useState<DailyData>();
  const [joinList, setjoinList] = useState<ChallengeJoin[]>([]);

  useEffect(() => {
    const daily3 = async () => {
      try {
        const response = await dailyChallenge3Api();
        setDaily3Data(response);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    daily3();
  }, []);

  useEffect(() => {
    const daily1Join = async () => {
      try {
        const response = await daily3JoinListApi();
        setjoinList(response.content);
      } catch (error) {
        console.error("Error in daily1Join: " + error);
      }
    };

    daily1Join();
  }, []);

  const contents: ChallengeContents = {
    mainTitle: daily3Data?.title || "",
    subTitle: daily3Data?.subTitle || "",
    howTitle: "인증방법",
    howInfo: daily3Data?.authMethod || "",
    periodTitle: "리워드",
    periodInfo: "100P (1일 1회 참여 횟수 제한)",
    pointTitle: "포인트 지급",
    pointInfo: "참여완료 즉시 지급",
  };

  const handleJoinButtonClick = async () => {
    // You can call the daily1 and daily1Join functions here if needed
    try {
      const daily1Response = await dailyChallenge3Api();
      const joinListResponse = await daily3JoinListApi();
      setDaily3Data(daily1Response);
      setjoinList(joinListResponse.content);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <Background>
        {daily3Data ? (
          <>
            <ChallengeHead head={daily3Data.title} />
            <ChallengeBanner banner={daily3Data.banner} />
            <ChallengeContents contents={contents} />
            <ChallengeJoin joinLists={joinList || []} />
            <JoinButton joinCheck={daily3Data.status} />
            <DailySaveBS
              id={daily3Data.challengeId}
              onHandle={handleJoinButtonClick}
            />
            <MainTab />
          </>
        ) : null}
      </Background>
    </>
  );
};

export default DailyChallenge3;

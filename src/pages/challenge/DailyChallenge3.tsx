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
  const [daily3Data, setDaily3Data] = useState<DailyData>()
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
        const response = await daily3JoinListApi()
        setjoinList(response.content)
      } catch(error) {
        console.error("Error in daily1Join: " + error)
      }
    }

    daily1Join()
  }, [])

  const contents: ChallengeContents = {
    mainTitle: daily3Data?.title || '',
    subTitle:  daily3Data?.subTitle || '',
    howTitle: "인증방법",
    howInfo: daily3Data?.authMethod || '',
    periodTitle: "진행기간",
    periodInfo: "1일",
    pointTitle: "포인트 지급",
    pointInfo: "참여완료시 바로 지급",
  };

  return (
    <>
      <Background>
      {daily3Data? <>
          <ChallengeHead head={daily3Data.title} />
        <ChallengeBanner banner={daily3Data.banner} />
        <ChallengeContents contents={contents} />
        <ChallengeJoin joinLists={joinList || []}/>
        <JoinButton />
        <DailySaveBS />
        <MainTab />
        </>: null}

      </Background>
    </>
  );
};

export default DailyChallenge3;

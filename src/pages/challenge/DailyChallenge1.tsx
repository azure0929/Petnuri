import Background from "@/components/Background";
import MainTab from "@/components/MainTab";
import ChallengeHead from "@/components/challenge/ChallengeHead";
import ChallengeBanner from "@/components/challenge/ChallengeBanner";
import ChallengeContents from "@/components/challenge/ChallengeContents";
import ChallengeJoin from "@/components/challenge/ChallengeJoin";
import JoinButton from "@/components/challenge/JoinButton";
import SaveBS from "./SaveBS";
import { useState, useEffect} from 'react';

const DailyChallenge1 = () => {
  const [challenges, setChallenges] = useState<ChallengeData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/Daily.json');
        const data = await response.json();
        setChallenges(data.data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
   }, []);

  const head: challengeHead = {
    head: "간식 바치기",
  };

  const banner: challengeBanner = {
    bannerImg: "배너 이미지",
  };

  const contents: challengeContents = {
    mainTitle: "간식 바치기",
    subTitle: "간식 바치기",
    howTitle: "인증방법",
    howInfo: "인증사진 업로드",
    periodTitle: "진행기간",
    periodInfo: "1일",
    pointTitle: "포인트 지급",
    pointInfo: "참여완료시 바로 지급",
  };



  return (
    <>
      <Background>
        <ChallengeHead head={head} />
        <ChallengeBanner banner={banner} />
        <ChallengeContents contents={contents} />
        {challenges.length > 0 && (
         <ChallengeJoin join={challenges[0].review} />
        )}
        <JoinButton />
        <SaveBS />
        <MainTab />
      </Background>
    </>
  );
};

export default DailyChallenge1;

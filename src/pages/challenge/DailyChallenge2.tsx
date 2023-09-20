import Background from "@/components/Background";
import MainTab from "@/components/MainTab";
import ChallengeHead from "@/components/challenge/ChallengeHead";
import ChallengeBanner from "@/components/challenge/ChallengeBanner";
import ChallengeContents from "@/components/challenge/ChallengeContents";
import ChallengeJoin from "@/components/challenge/ChallengeJoin";
import JoinButton from "@/components/challenge/JoinButton";
import DailySaveBS from "./DailySaveBS";
import styles from "@/styles/challenge/challengejoin.module.scss";
import { useState, useEffect } from "react";
import { useScrollDiv } from "@/utils/Scroll";
import BannerImg from "@/assets/놀아주기.png";

const DailyChallenge2 = () => {
  const scrollRef = useScrollDiv();
  const [challenges, setChallenges] = useState<ChallengeData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/Daily.json");
        const data = await response.json();
        setChallenges(data.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  const head: challengeHead = {
    head: "산책 시키기",
  };

  const banner: challengeBanner = {
    bannerImg: BannerImg,
  };

  const contents: challengeContents = {
    mainTitle: "산책 시키기",
    subTitle: "산책 시키기",
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
        <span className={styles.title}>다른 집사들도 참여중이에요!</span>
        <div className={styles.participants} ref={scrollRef}>
          {challenges[1]?.review.map((review, reviewIndex) => (
            <ChallengeJoin
              key={reviewIndex}
              join={{
                participantsImg: review.reviewImgUrl,
                participantsName: review.reviewUserNickname,
              }}
            />
          ))}
        </div>
        <JoinButton />
        <DailySaveBS />
        <MainTab />
      </Background>
    </>
  );
};

export default DailyChallenge2;

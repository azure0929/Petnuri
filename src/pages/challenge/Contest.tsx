import Background from "@/components/Background";
import MainTab from "@/components/MainTab";
import ChallengeHead from "@/components/challenge/ChallengeHead";
import ChallengeBanner from "@/components/challenge/ChallengeBanner";
import ChallengeContents from "@/components/challenge/ChallengeContents";
import ChallengeJoin from "@/components/challenge/ChallengeJoin";
import JoinButton from "@/components/challenge/JoinButton";
import DeliveryBS from "./deliverybs/DeliveryBS";
import ChallengeItem from "@/components/challenge/ChallengeItem";
import { useEffect, useState } from "react";
import JoinComplete from "@/components/challenge/JoinComplete";
import styles from "@/styles/challenge/challengejoin.module.scss";
import { useScrollDiv } from "@/utils/Scroll";
import BannerImg from "@/assets/천하제일 집사대회.png";

interface contestData {
  process: string;
}

const Contest = () => {
  const scrollRef = useScrollDiv();
  const [joinList, setJoinList] = useState<joinList[]>([]);
  const [contestData, setContestData] = useState<contestData | null>(null);

  useEffect(() => {
    const contestApi = async () => {
      try {
        const response = await fetch("/Cheonha.json");
        const data = await response.json();
        setContestData(data.data[0]);
      } catch (error) {
        console.error("contestApi Error : " + error);
      }
    };

    contestApi();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/Chamyo.json");
        const data = await response.json();
        setJoinList(data.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  const head: challengeHead = {
    head: "천하제일 집사대회",
  };

  const banner: challengeBanner = {
    bannerImg: BannerImg,
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
        <ChallengeItem />
        <span className={styles.title}>다른 집사들도 참여중이에요!</span>
        <div className={styles.participants} ref={scrollRef}>
          {joinList !== null
            ? joinList.map((joinItem, index) => (
                <ChallengeJoin
                  key={index}
                  join={{
                    participantsImg: joinItem.imageUrl,
                    participantsName: joinItem.nickName,
                  }}
                />
              ))
            : null}
        </div>
        {renderButton}
        <DeliveryBS />
        <MainTab />
      </Background>
    </>
  );
};

export default Contest;

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
import KitModal from "@/components/modal/KitModal";
import DeliveryReg from "@/components/challenge/delivery/DeliveryReg";
import DeliveryList from "@/components/challenge/delivery/DeliveryList";
import DeliveryUpdate from "@/components/challenge/delivery/DeliveryUpdate";
import { BSTypeState } from "@/store/challengeState";
import { useRecoilValue } from "recoil";
import { ContestCheckApi, ContestJoinApi } from "@/lib/apis/challengeApi";

const Contest = () => {
  const [joinList, setJoinList] = useState<ChallengeJoin[] | null>(null);
  const [contestData, setContestData] = useState<ContestData | null>(null);
  const BSType = useRecoilValue(BSTypeState);

  useEffect(() => {
    const contestApi = async () => {
      try {
        const response = await ContestCheckApi();
        setContestData(response);
      } catch (error) {
        console.error("contestApi Error : " + error);
      }
    };

    contestApi();
  }, []);

  useEffect(() => {
    const joinAPi = async () => {
      try {
        const response = await ContestJoinApi();
        setJoinList(response.data);
      } catch (error) {
        console.error("joinAPi Error:", error);
      }
    };
    joinAPi();
  }, []);

  const contents: ChallengeContents = {
    mainTitle: contestData?.title || "",
    subTitle: contestData?.subTitle || "",
    howTitle: "인증방법",
    howInfo: "인증사진 업로드",
    periodTitle: "진행기간",
    periodInfo: "1일",
    pointTitle: "포인트 지급",
    pointInfo: "참여완료시 바로 지급",
  };

  let renderButton;
  if (contestData !== null && contestData.status === "OPENED") {
    renderButton = <JoinButton />;
  } else if (contestData !== null && contestData.status === "READY") {
    renderButton = <JoinComplete />;
  } else if (contestData !== null && contestData.status === "CLOSED") {
    renderButton = <div>인증하기</div>;
  }

  return (
    <>
      <Background>
        {contestData ? (
          <>
            <ChallengeHead head={contestData.title} />
            <ChallengeBanner banner={contestData.poster} />
            <ChallengeContents contents={contents} />
            <ChallengeItem />
            <ChallengeJoin joinLists={joinList || []} />
            {renderButton}
            <KitModal />
            {BSType === "DeliveryBS" && <DeliveryBS />}
            {BSType === "DeliveryReg" && <DeliveryReg />}
            {BSType === "DeliveryList" && <DeliveryList />}
            {BSType === "DeliveryUpdate" && <DeliveryUpdate />}
            <MainTab />
          </>
        ) : null}
      </Background>
    </>
  );
};

export default Contest;

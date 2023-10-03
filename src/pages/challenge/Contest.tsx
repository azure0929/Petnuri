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
import KitModal from "@/components/modal/KitModal";
import DeliveryReg from "@/components/challenge/delivery/DeliveryReg";
import DeliveryList from "@/components/challenge/delivery/DeliveryList";
import { BSTypeState } from "@/store/challengeState";
import { useRecoilValue } from "recoil";
import { ContestCheckApi, ContestJoinApi } from "@/lib/apis/challengeApi";

const Contest = () => {
  const scrollRef = useScrollDiv();
  const [joinList, setJoinList] = useState<JoinList[] | null>(null);
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
    console.log(contestData);
  }, []);

  useEffect(() => {
    const joinAPi = async () => {
      try {
        const response = await ContestJoinApi();
        setJoinList(response);
      } catch (error) {
        console.error("joinAPi Error:", error);
      }
    };

    joinAPi();
    console.log(joinList);
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
            <span className={styles.title}>다른 집사들도 참여중이에요!</span>
            <div className={styles.participants} ref={scrollRef}>
              {joinList ? (
                joinList.map((joinItem) => (
                  <ChallengeJoin
                    key={joinItem.id}
                    join={{
                      participantsImg: joinItem.photoUrl,
                      participantsName: joinItem.photoName,
                    }}
                  />
                ))
              ) : (
                <>
                  <div>아직 아무도 참여를 안했습니다.</div>
                </>
              )}
            </div>
            {renderButton}
            <KitModal />
            {BSType === "DeliveryBS" && <DeliveryBS />}
            {BSType === "DeliveryReg" && <DeliveryReg />}
            {BSType === "DeliveryList" && <DeliveryList />}
            <MainTab />
          </>
        ) : null}
      </Background>
    </>
  );
};

export default Contest;

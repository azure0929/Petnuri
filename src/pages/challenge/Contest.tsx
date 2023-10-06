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
import KitModal from "@/components/modal/KitModal";
import DeliveryReg from "@/components/challenge/delivery/DeliveryReg";
import DeliveryList from "@/components/challenge/delivery/DeliveryList";
import DeliveryUpdate from "@/components/challenge/delivery/DeliveryUpdate";
import { BSTypeState } from "@/store/challengeState";
import { useRecoilValue } from "recoil";
import {
  ContestCheckApi,
  ContestJoinApi,
  joinCheckApi,
} from "@/lib/apis/challengeApi";
import EventSaveBS from "@/components/challenge/EventSaveBS";

const Contest = () => {
  const [joinList, setJoinList] = useState<ChallengeJoin[] | null>(null);
  const [contestData, setContestData] = useState<ContestData | null>(null);
  const [joinCheckData, setJoinCheckData] = useState<any>("");
  const BSType = useRecoilValue(BSTypeState);

  // 집사대회 조회
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
  }, [joinCheckData]);

  // 집사대회 참여여부 조회

  useEffect(() => {
    const joinCheck = async () => {
      try {
        const response = await joinCheckApi();

        if (response === "join") {
          setJoinCheckData(response);
        } else {
          setJoinCheckData(response.data.process);
        }
        // setJoinCheckData(response);
      } catch (error) {
        console.error("Error in JoinCheck: " + error);
      }
    };
    joinCheck();
  }, [joinCheckData]);

  // 집사대회 참여자 조회
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

  console.log("joinCheckData: " + joinCheckData);

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

  const handleJoinButtonClick = async () => {
    // You can call the daily1 and daily1Join functions here if needed
    try {
      const contestResponse = await ContestCheckApi();
      const joinCheckResponse = await joinCheckApi();
      // const joinResponse = await ContestJoinApi();
      setContestData(contestResponse);
      setJoinCheckData(joinCheckResponse);
      console.log("joinCheckResponse asd : " + joinCheckResponse);
      // setJoinList(joinResponse);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleBS = async () => {
    const joinCheckResponse = await joinCheckApi();
    setJoinCheckData(joinCheckResponse);
    console.log("joinCheckResponse 123 : " + joinCheckResponse);
  };

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
            {joinCheckData ? (
              <>
                <JoinButton joinCheck={joinCheckData} />
              </>
            ) : null}
            <KitModal />
            {BSType === "DeliveryBS" && <DeliveryBS onHandle={handleBS} />}
            {BSType === "DeliveryReg" && <DeliveryReg />}
            {BSType === "DeliveryList" && <DeliveryList />}
            {BSType === "DeliveryUpdate" && <DeliveryUpdate />}
            <EventSaveBS
              id={contestData.id}
              eventName="reward"
              onHandle={handleJoinButtonClick}
            />

            <MainTab />
          </>
        ) : null}
      </Background>
    </>
  );
};

export default Contest;

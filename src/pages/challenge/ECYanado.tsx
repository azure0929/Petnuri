import Background from "@/components/Background";
import MainTab from "@/components/MainTab";
import ChallengeHead from "@/components/challenge/ChallengeHead";
import ChallengeBanner from "@/components/challenge/ChallengeBanner";
import ChallengeContents from "@/components/challenge/ChallengeContents";
import ChallengeJoin from "@/components/challenge/ChallengeJoin";
import JoinButton from "@/components/challenge/JoinButton";
import EventSaveBS from "@/components/challenge/EventSaveBS";
import styles from "@/styles/challenge/challengejoin.module.scss";
import { useState, useEffect } from "react";
import { useScrollDiv } from "@/utils/Scroll";
import { ECyanadoCheckApi, ECyanadoJoinApi } from "@/lib/apis/challengeApi";

const ECYanado = () => {
  const scrollRef = useScrollDiv();
  const [yanadoData, setYanadoData] = useState<YanadoData | null>(null);
  const [joinList, setJoinList] = useState<JoinList[]>([]);

  useEffect(() => {
    const ecyanadoApi = async () => {
      try {
        const response = await ECyanadoCheckApi();
        console.log("res" + response);

        setYanadoData(response);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    ecyanadoApi();
  }, []);

  useEffect(() => {
    const joinAPi = async () => {
      try {
        const response = await ECyanadoJoinApi();
        setJoinList(response);
      } catch (error) {
        console.error("joinAPi Error:", error);
      }
    };

    joinAPi();
    console.log(joinList);
  }, []);

  console.log(joinList);

  const contents: ChallengeContents = {
    mainTitle: yanadoData?.title || "",
    subTitle: yanadoData?.subTitle || "",
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
        {yanadoData ? (
          <>
            <ChallengeHead head={"야 너도? 야 나두!"} />
            <ChallengeBanner banner={yanadoData.poster} />
            <ChallengeContents contents={contents} />
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
            <JoinButton />
            <EventSaveBS />
            <MainTab />
          </>
        ) : null}
      </Background>
    </>
  );
};

export default ECYanado;

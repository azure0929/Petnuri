import Background from "@/components/Background";
import MainTab from "@/components/MainTab";
import ChallengeHead from "@/components/challenge/ChallengeHead";
import ChallengeBanner from "@/components/challenge/ChallengeBanner";
import ChallengeContents from "@/components/challenge/ChallengeContents";
import ChallengeJoin from "@/components/challenge/ChallengeJoin";
import JoinButton from "@/components/challenge/JoinButton";
import EventSaveBS from "@/pages/challenge/EventSaveBS";

const ECYanado = () => {
  const head: challengeHead = {
    head: "야 너도? 야 나도!",
  };

  const banner: challengeBanner = {
    bannerImg: "배너 이미지",
  };

  const contents: challengeContents = {
    mainTitle: "야 너도? 야 나도!",
    subTitle: "야 너도? 야 나도!",
    howTitle: "인증방법",
    howInfo: "인증사진 업로드",
    periodTitle: "진행기간",
    periodInfo: "1일",
    pointTitle: "포인트 지급",
    pointInfo: "참여완료시 바로 지급",
  };

  const join: challengeJoin = {
    participantsTitle: "다른 집사들도 참여중이에요!",
    participantsImg: "이미지",
    participantsName: "아이디",
  };

  return (
    <>
      <Background>
        <ChallengeHead head={head} />
        <ChallengeBanner banner={banner} />
        <ChallengeContents contents={contents} />
        <ChallengeJoin join={join} />
        <JoinButton />
        <EventSaveBS />
        <MainTab />
      </Background>
    </>
  );
};

export default ECYanado;

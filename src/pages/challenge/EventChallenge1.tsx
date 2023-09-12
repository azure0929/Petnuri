import Background from "@/components/Background";
import MainTab from "@/components/MainTab";
import EventChallenge from "@/components/challenge/EventChallenge";
import JoinButton from "@/components/challenge/JoinButton";

const EventChallenge1 = () => {
  const data: challenge = {
    mainTitle: "천하제일 집사대회",
    subTitle: "천하제일 집사대회",
    howTitle: "인증방법",
    howInfo: "인증사진 업로드",
    periodTitle: "진행기간",
    periodInfo: "1일",
    pointTitle: "포인트 지급",
    pointInfo: "참여완료시 바로 지급",
    participantsTitle: "다른 집사들도 참여중이에요!",
    participantsImg: "이미지",
    participantsName: "아이디",
  };

  return (
    <>
      <Background>
        <EventChallenge eventchallenges={data} />
        <JoinButton />
      </Background>
      <MainTab />
    </>
  );
};

export default EventChallenge1;

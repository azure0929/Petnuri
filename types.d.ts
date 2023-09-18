interface challengeHead {
  head: string;
}

interface challengeBanner {
  bannerImg: string;
}

interface challengeContents {
  mainTitle: string;
  subTitle: string;
  howTitle: string;
  howInfo: string;
  periodTitle: string;
  periodInfo: string;
  pointTitle: string;
  pointInfo: string;
}

interface challengeJoin {
  participantsImg: string;
  participantsName: string;
}

interface joinList {
  images: string;
  nickName: string;
  // process: string;
}

//데일리 이벤트 조회, 챌린지 홈, 어드민에서 사용
interface Review {
  reviewUserId: number;
  reviewUserNickname: string;
  reviewImgUrl: string;
}

type ChallengeJoinProps = {
  join: Review[];
};

interface ChallengeData {
  challengeId: number;
  challengeName: string;
  challengeReview: string;
  thumbnail: string;
  userId: number;
  review: Review[];
  status: boolean;
}

interface CheonHaData {
  title: string,
  thumbnail: string,
  images:string[],
  kit_start_date: string,
  kit_end_date: string,
  reward_start_date: string,
  reward_end_date: string,
  rewardList: [
    {
      itemId: number,
      name: string
    }
  ],
  process: string
}

interface YanadoData {
  title: string,
  thumbnail: string,
  images: string[],
  rewardStartDate:string,
  rewardEndDate:string,
  rewardList:[
    {
      eventId:number,
      itemId:number,
      name:string
    }
  ],
  process: string
}

//펫톡

interface PetTalkMainPage {
  petTalkId : number;
  thumbnail : string;
  title : string;
  content : string;
  createdAt : string;
  viewCount : number;
  likeCount : number;
  replyCount : number;
  isLiked : true;
  writer : writer;
}

interface writer {
  writerId : number;
  profileImageUrl : string;
  nickname : string;
  rank : string;
}
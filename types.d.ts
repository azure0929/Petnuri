// 이벤트 챌린지 타입
interface ChallengeHead {
  head: string;
}

interface ChallengeBanner {
  bannerImg: string;
}

interface ChallengeContents {
  mainTitle: string;
  subTitle: string;
  howTitle: string;
  howInfo: string;
  periodTitle: string;
  periodInfo: string;
  pointTitle: string;
  pointInfo: string;
}

interface ChallengeJoin {
  participantsImg: string;
  participantsName: string;
}

interface JoinList {
  memberId: number;
  imageUrl: string;
  nickName: string;
}

interface joinListEvent {
  id: number;
  photoUrl: string;
  photoName: string;
  content: string;
  createdAt: string;
}

interface Item {
  thumbnail?: string;
  title?: string;
  subTitle?: string;
}

interface HomeEventListProps {
  item: Item | undefined;
  onClick: () => void;
}

interface ChallengeEventListProps {
  item: Item | undefined;
  path: string;
}

interface ContestData {
  title: string;
  status: string;
  poster: string;
  subTitle: string;
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

interface DailyDetailList {
  challengeId: number;
  challengeName: string;
  challengeReview: string;
  dailyReview: Review[];
  status?: boolean;
}

interface DailyAllList {
  challengeId: number;
  title: string;
  thumbnail: string;
  status: boolean;
}

interface PrivacyData {
  data: Privacy[];
}

interface Privacy {
  id: number;
  name: string;
  phone: string;
  roadAddress: string;
  address: string;
  zipcode: string;
  isBased: boolean;
}

type Pet = {
  id: number | null;
  petName: string;
  image: string;
  petGender: string;
  petAge: number | null;
  isSelected?: boolean;
};

type EventChallenge = {
  id: number;
  title: string;
  subTitle: string;
  thumbnail: string;
};

type DailyChallenge = {
  id: number;
  title: string;
  subTitle: string;
  thumbnail: string;
};

type PetTalk = {
  id: number;
  title: string;
  writer: string;
  thumbnail: string;
  createdAt: string;
};

type ChallengeList = {
  eventChallengeList: EventChallenge[];
  dailyChallenge: DailyChallenge;
};

interface DataContent {
  petList: Pet[];
  challengeList: ChallengeList;
  petTalkList: PetTalk[];
}

interface DataResponse {
  content: DataContent;
}

//펫톡

interface PetTalkMainPage {
  petTalkId: number;
  thumbnail: string;
  title: string;
  content: string;
  createdAt: string;
  viewCount: number;
  likeCount: number;
  replyCount: number;
  isLiked: true;
  writer: writer;
}

interface writer {
  writerId: number;
  profileImageUrl: string;
  nickname: string;
  rank: string;
}

interface DefaultAddress {
  name: string;
  phone: string;
  add1: string;
  add2: string;
  zoneCode: string;
  default?: boolean;
}

type DefaultAddressArray = DefaultAddress[];

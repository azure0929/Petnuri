// 이벤트 챌린지 타입

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
  id: number;
  participantsImg: string;
  participantsName: string;
  nickName: string;
  imageUrl: string;
}

interface JoinList {
  id: number;
  photoName: string;
  photoUrl: string;
}

interface YanadoData {
  title: string;
  status: string;
  poster: string;
  subTitle: string;
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

interface DailyData {
  challengeId: number;
  banner: string;
  title: string;
  subTitle: string;
  authMethod: string;
  point: number;
  pointMethod: string;
  status: boolean;
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

interface DeliveryAddress {
  id: number;
  name: string;
  phone: string;
  roadAddress: string;
  address: string;
  zipcode: string;
  isBased: boolean;
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
  roadAddress: string;
  address: string;
  zipcode: string;
  isBased?: boolean;
}

type DefaultAddressArray = DefaultAddress[];

interface PetTalkItem {
  id: number;
  title: string;
  content: string;
  thumbnail: string | null;
  viewCount: number;
  emojiCount: number | null;
  replyCount: number | null;
  reacted: boolean;
  createdAt: string;
  writer: {
    id: number;
    nickname: string;
    profileImageUrl: string | null;
  };
}

interface PetTalkPhoto {
  id: number;
  name: string;
  url: string;
}

interface ReplyItem {
  writer: {
    writerId: number;
    profileImageUrl: string | null;
    nickname: string;
  };
  replyId: number;
  content: string;
  createdAt: string;
  tag: string | null;
}

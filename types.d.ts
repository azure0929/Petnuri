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
  memberId: number;
  nickName: string;
  imageUrl: string;
  photoUrl?: string; // photoUrl는 옵셔널로 지정합니다.
  reviews?: FilterDataArray;
  createdAt: string;
}

// 집사대회 내 참여현황
interface JoinCheckData {
  process: string;
}

interface FilterData {
  id: number;
  memberId: number;
  nickName: string;
  imageUrl: string;
  photoUrl: string; // photoUrl은 옵셔널로 지정합니다.
}

type FilterDataArray = FilterData[];

interface FilterData {
  id: number;
  nickName: string;
  imageUrl: string;
  photoUrl: string;
}

type FilterDataArray = FilterData[];

interface JoinList {
  id: number;
  photoName: string;
  photoUrl: string;
}

interface YanadoData {
  id: number;
  title: string;
  status: string;
  poster: string;
  subTitle: string;
  writtenReviewToday: boolean;
}

interface DeliveryData {
  rewardId: number; //rewardId,
  isConsentedPersonalInfo: boolean;
  delivery: {
    name: string;
    phone: string;
    roadAddress: string;
    address: string;
    zipcode: string;
    message: string;
  };
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
  id: number;
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

// 리워드 상품
interface RewardData {
  id: number;
  name: string;
  quantity: number;
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
  thumbnail?: string;
  viewCount: number;
  totalEmojiCount: number;
  replyCount: number;
  reacted: boolean;
  createdAt: string;
  emoji: {
    cuteCount: number;
    funCount: number;
    kissCount: number;
    omgCount: number;
    sadCount: number;
    totalEmojiCount: number;
  };
  writer: {
    id: number;
    nickname: string;
    profileImageUrl?: string;
  };
  petTalkPhotos?: PetTalkPhoto[];
}

interface PetTalkPhoto {
  id: number;
  name: string;
  url: string;
}

interface ReplyItem {
  writer: {
    writerId: number;
    profileImageUrl?: string;
    nickname: string;
  };
  replyId: number;
  content: string;
  createdAt: string;
  tag?: {
    taggedMemberId: number;
    nickname: string;
  };
}

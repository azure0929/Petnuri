import { Route, Routes } from "react-router-dom";
import Modal from "react-modal";
// 홈, 로그인, 회원가입, 온보딩
import Home from "@/pages/home";
import Login from "@/pages/login";
import SignUp from "./pages/signup";
import OnBoarding from "./pages/onboarding";
import PetRegist from "./pages/onboarding/PetRegist";
import RegistSuccess from "./pages/onboarding/RegistSuccess";
// 챌린지
import Challenge from "./pages/challenge";
import Contest from "./pages/challenge/Contest";
import ECYanado from "@/pages/challenge/ECYanado";
import DailyChallenge1 from "./pages/challenge/DailyChallenge1";
import DailyChallenge2 from "./pages/challenge/DailyChallenge2";
import DailyChallenge3 from "./pages/challenge/DailyChallenge3";
import PointShop from "@/pages/challenge/PointShop";
// 펫톡
import PetTalk from "@/pages/petTalk";
import PetTaliDetail from "./pages/petTalk/Detail";
import Concern from "@/pages/petTalk/Concern";
import FreeTalk from "@/pages/petTalk/Freetalk";
import ConcernWrite from "./pages/petTalk/ConcernWrite";
import FreetalkWrite from "./pages/petTalk/FreetalkWrite";

//펫 프로필
import PetProfileAdd from "@/pages/petprofile";
import Modify from "@/pages/petprofile/Modify";
// 마이페이지
import MyPage from "./pages/mypage/MyPage";
import EditInfo from "./pages/mypage/EditInfo";
// 어드민
import Admin from "@/pages/admin";
import Daily from "@/pages/admin/Daily";
import Yanado from "@/pages/admin/Yanado";
import Nayegi from "./pages/admin/Nayegi";
import Cheonha from "./pages/admin/Cheonha";

import "./styles/common.scss";
import "./styles/globalstyle.scss";

Modal.setAppElement("#root");

const App = () => {
  return (
    <Routes>
      {/* 홈, 로그인, 회원가입, 온보딩 */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/onboarding" element={<OnBoarding />} />
      <Route path="/petregist" element={<PetRegist />} />
      <Route path="/registsuccess" element={<RegistSuccess />} />
      {/* 챌린지 */}
      <Route path="/challenge" element={<Challenge />} />
      <Route path="/contest" element={<Contest />} />
      <Route path="/ecyanado" element={<ECYanado />} />
      <Route path="/dailychallenge1" element={<DailyChallenge1 />} />
      <Route path="/dailychallenge2" element={<DailyChallenge2 />} />
      <Route path="/dailychallenge3" element={<DailyChallenge3 />} />
      <Route path="/pointshop" element={<PointShop />} />
      {/* 펫톡 */}
      <Route path="/petTalk" element={<PetTalk />} />
      <Route path="/petTalk/:petTaliId" element={<PetTaliDetail />} />
      <Route path="/petTalk/concern" element={<Concern />} />
      <Route path="/petTalk/freetalk" element={<FreeTalk />} />
      <Route path="/petTalk/concernwrite" element={<ConcernWrite />} />
      <Route path="/petTalk/freetalkwrite" element={<FreetalkWrite />} />
      {/* 펫 프로필 */}
      <Route path="/petprofileadd" element={<PetProfileAdd />} />
      <Route path="/petprofilemodify" element={<Modify />} />
      {/* 마이페이지 */}
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/mypage/editinfo" element={<EditInfo />} />
      {/* 어드민 */}
      <Route>
        <Route path="/admin" element={<Admin />} />
        <Route path="daily" element={<Daily />} />
        <Route path="yanado" element={<Yanado />} />
        <Route path="nayegi" element={<Nayegi />} />
        <Route path="cheonha" element={<Cheonha />} />
      </Route>
    </Routes>
  );
};

export default App;

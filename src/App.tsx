import { Route, Routes } from "react-router-dom";
// 홈, 로그인, 온보딩
import Home from "@/pages/home";
import Login from "@/pages/Login";
import OnBoarding from "./pages/onboarding";
import PetRegist from "./pages/onboarding/PetRegist";
// 챌린지
import Challenge from "./pages/challenge";
import Contest from "./pages/challenge/Contest";
import DailyChallenge1 from "./pages/challenge/DailyChallenge1";
import PointShop from "@/pages/challenge/PointShop";
// 펫톡
import PetTalk from "@/pages/petTalk";
import Concern from "./pages/petTalk/Concern";
import FreeTalk from "@/pages/petTalk/Freetalk";
import ConcernWrite from "./pages/petTalk/ConcernWrite";
import FreetalkWrite from "./pages/petTalk/FreetalkWrite";

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

const App = () => {
  return (
    <Routes>
      {/* home, login, 온보딩 */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/onboarding" element={<OnBoarding />} />
      <Route path="/petregist" element={<PetRegist />} />
      {/* 챌린지 */}
      <Route path="/challenge" element={<Challenge />} />
      <Route path="/contest" element={<Contest />} />
      <Route path="/dailychallenge1" element={<DailyChallenge1 />} />
      <Route path="/pointshop" element={<PointShop />} />
      {/* 펫톡 */}
      <Route path="/pettalk" element={<PetTalk />} />
      <Route path="/concern" element={<Concern />} />
      <Route path="/freetalk" element={<FreeTalk />} />
      <Route path="/pettalk/concernwrite" element={<ConcernWrite />} />
      <Route path="/pettalk/freetalkwrite" element={<FreetalkWrite />} />
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

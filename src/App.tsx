import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Place from "./pages/Place";
import Challenge from "./pages/challenge";
import PointShop from "@/pages/challenge/PointShop";
import PetTalk from "./pages/PetTalk";
import MyPage from "./pages/MyPage";

import "./styles/common.scss";
import "./styles/globalstyle.scss";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/place" element={<Place />} />
      <Route path="/challenge" element={<Challenge />} />
      <Route path="/pointshop" element={<PointShop />} />
      <Route path="/pettalk" element={<PetTalk />} />
      <Route path="/mypage" element={<MyPage />} />
    </Routes>
  );
};

export default App;

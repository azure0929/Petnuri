import "../styles/maintab.scss";
import { NavLink, useLocation } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { HiChatBubbleOvalLeft } from "react-icons/hi2";
import { IoPersonSharp } from "react-icons/io5";

const MainTab = () => {
  const location = useLocation();

  return (
    <>
      <div className="main-tab">
        <NavLink
          className={
            location.pathname === "/" ? "main-tab-item active" : "main-tab-item"
          }
          to="/"
        >
          <AiFillHome size="24px" />
          <p>홈</p>
        </NavLink>

        <NavLink
          className={
            location.pathname === "/challenge"
              ? "main-tab-item active"
              : "main-tab-item"
          }
          to="/challenge"
        >
          <BsFillLightningChargeFill size="24px" />
          <p>챌린지</p>
        </NavLink>

        <NavLink
          className={
            location.pathname === "/petTalk"
              ? "main-tab-item active"
              : "main-tab-item"
          }
          to="/petTalk"
        >
          <HiChatBubbleOvalLeft size="24px" />
          <p>펫톡</p>
        </NavLink>

        <NavLink
          className={
            location.pathname === "/mypage"
              ? "main-tab-item active"
              : "main-tab-item"
          }
          to="/mypage"
        >
          <IoPersonSharp size="24px" />
          <p>마이페이지</p>
        </NavLink>
      </div>
    </>
  );
};
export default MainTab;

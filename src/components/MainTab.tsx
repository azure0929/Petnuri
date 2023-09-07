import "../styles/maintab.scss";
import { Link } from "react-router-dom";

const MainTab = () => {
  return (
    <>
      <div className="main-tab">
        <Link className="main-tab-item" to="/">
          <p>홈</p>
        </Link>
        <Link className="main-tab-item" to="/place">
          <p>가봤어요</p>
        </Link>
        <Link className="main-tab-item" to="/challenge">
          <p>챌린지</p>
        </Link>
        <Link className="main-tab-item" to="/pettalk">
          <p>펫톡</p>
        </Link>
        <Link className="main-tab-item" to="/mypage">
          <p>마이페이지</p>
        </Link>
      </div>
    </>
  );
};
export default MainTab;

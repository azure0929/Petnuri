import MainTab from "../components/MainTab";
import "../styles/common.scss";

const MyPage = () => {
  return (
    <>
      <div className="container">
        <div className="background">임시 배경</div>
        <div className="content">
          <div>임시 MyPage 페이지</div>
        </div>
      </div>
      <MainTab />
    </>
  );
};
export default MyPage;

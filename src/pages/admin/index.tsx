import MainTab from "@/components/MainTab";
import Background from "@/components/Background";
import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <>
      <Background>
        <Link to='/yanado' style={{fontSize:'24px', lineHeight:'100px'}}>'야나도'로 가자</Link>
        <br />
        <Link to='/cheonha' style={{fontSize:'24px', lineHeight:'100px'}}>'천하제일'로 가자</Link>
        <br />
        <Link to='/daily' style={{fontSize:'24px', lineHeight:'100px'}}>'데일리'로 가자</Link>
      </Background>
      <MainTab />
    </>
  );
};
export default Admin;

import MainTab from "@/components/MainTab";
import Background from "@/components/Background";
import Yanado from "./Yanado";
import Daily from "./Daily";

const Admin = () => {
  return (
    <>
      <Background>
        <Yanado />
        <br />
        <Daily />
      </Background>
      <MainTab />
    </>
  );
};
export default Admin;

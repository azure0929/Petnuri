import MainTab from "@/components/MainTab";
import Background from "@/components/Background";
import DailyGet from "./DailyGet";
import DailyPost from "./DailyPost";

const Daily = () => {
  return (
    <>
      <Background>  
        <DailyPost />
        <br />
        <DailyGet />
      </Background>
      <MainTab />
    </>
  );
};
export default Daily;

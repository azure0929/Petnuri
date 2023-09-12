import MainTab from "@/components/MainTab";
import Background from "@/components/Background";
import YanadoGet from "./YanadoGet";
import YanadoPost from "./YanadoPost";

const Yanado = () => {
  return (
    <>
      <Background>  
        <YanadoPost />
        <br />
        <YanadoGet />
      </Background>
      <MainTab />
    </>
  );
};
export default Yanado;

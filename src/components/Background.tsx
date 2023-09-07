import { ReactNode } from "react";
import "../styles/common.scss";

interface BackgroundProps {
  children: ReactNode;
}

const Background: React.FC<BackgroundProps> = ({ children }) => {
  return (
    <>
      <div className="container">
        <div className="background">임시 배경</div>
        <div className="content">{children}</div>
      </div>
    </>
  );
};
export default Background;

import styles from "@/styles/challenge/challengehead.module.scss";
import leftArrow from "@/assets/arrow_left_mid.svg";
import { useNavigate } from "react-router-dom";

interface headProps {
  head: ChallengeHead;
}

const ChallengeHead: React.FC<headProps> = ({ head }) => {
  const navigate = useNavigate();

  const onClickBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div className={styles.headContanier}>
        <div className={styles.arrowImg} onClick={onClickBack}>
          <img src={leftArrow}></img>
        </div>
        <div className={styles.header}>{head.head}</div>
      </div>
    </>
  );
};

export default ChallengeHead;

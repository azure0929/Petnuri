import styles from "@/styles/challenge/challengehead.module.scss";
import leftArrow from "@/assets/arrow_left_mid.svg";
import { useNavigate } from "react-router-dom";

interface ChallengeHeadProps {
  head: string;
}

const ChallengeHead: React.FC<ChallengeHeadProps> = ({ head }) => {
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
        <div className={styles.header}>{head}</div>
      </div>
    </>
  );
};

export default ChallengeHead;

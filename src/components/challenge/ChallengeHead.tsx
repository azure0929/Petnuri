import styles from "@/styles/challengehead.module.scss";

interface headProps {
  head: challengeHead;
}

const ChallengeHead: React.FC<headProps> = ({ head }) => {
  return (
    <>
      <div className={styles.head}>
        <span>{head.head}</span>
      </div>
    </>
  );
};

export default ChallengeHead;

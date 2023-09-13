import styles from "@/styles/challengehead.module.scss";

interface headProps {
  head: challengeHead;
}

const ChallengeHead: React.FC<headProps> = ({ head }) => {
  return (
    <>
      <div className={styles.header}>
        <div>{head.head}</div>
      </div>
    </>
  );
};

export default ChallengeHead;

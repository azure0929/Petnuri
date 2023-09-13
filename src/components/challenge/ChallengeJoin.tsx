import styles from "@/styles/challengejoin.module.scss";

interface joinProps {
  join: challengeJoin;
}

const ChallengeJoin: React.FC<joinProps> = ({ join }) => {
  return (
    <>
      <div className={styles.participants}>
        <span className={styles.title}>{join.participantsTitle}</span>
        <div className={styles.info}>
          <div className={styles.img}>{join.participantsImg}</div>
          <div className={styles.name}>
            <span>{join.participantsName}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChallengeJoin;

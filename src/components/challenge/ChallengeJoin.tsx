import styles from "@/styles/challengejoin.module.scss";

interface joinProps {
  join: challengeJoin;
}

const ChallengeJoin: React.FC<joinProps> = ({ join }) => {

  return (
    <>
      <div className={styles.info}>
        <img 
          src={join.participantsImg} 
          alt="Review" 
          className={styles.img}/>
        <div className={styles.name}>
          <span>{join.participantsName}</span>
        </div>
      </div>
    </>
  );
};

export default ChallengeJoin;

import styles from "@/styles/challengecontents.module.scss";

interface contentsProps {
  contents: challengeContents;
}

const ChallengeContents: React.FC<contentsProps> = ({ contents }) => {
  return (
    <>
      <div>
        <div className={styles.title}>
          <div className={styles.mainTitle}>{contents.mainTitle}</div>
          <div className={styles.subTitle}>{contents.subTitle}</div>
        </div>
        <div className={styles.contents}>
          <div className={styles.how}>
            <span className={styles.howTitle}>{contents.howTitle}</span>
            <span className={styles.howInfo}>{contents.howInfo}</span>
          </div>
          <div className={styles.period}>
            <span className={styles.periodTitle}>{contents.periodTitle}</span>
            <span className={styles.periodInfo}>{contents.periodInfo}</span>
          </div>
          <div className={styles.point}>
            <span className={styles.pointTitle}>{contents.pointTitle}</span>
            <span className={styles.pointInfo}>{contents.pointInfo}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChallengeContents;

import styles from "@/styles/JoinButton.module.scss";

const JoinButton = () => {
  return (
    <>
      <button className={styles.joinButton}>
        <span className={styles.buttonText}>참여하기</span>
      </button>
    </>
  );
};

export default JoinButton;
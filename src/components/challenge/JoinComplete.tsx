import styles from "@/styles/challenge/joincomplete.module.scss";

const JoinButton = () => {
  const handleComplete = () => {
    alert("이미 신청완료 된 상태입니다");
  };

  return (
    <>
      <button className={styles.joinButton} onClick={handleComplete}>
        <span className={styles.buttonText}>참여 신청 완료</span>
      </button>
    </>
  );
};

export default JoinButton;

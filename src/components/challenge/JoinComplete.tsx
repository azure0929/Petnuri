import styles from "@/styles/challenge/joincomplete.module.scss";
import { createToast } from "@/utils/ToastUtils";

const JoinButton = () => {
  const error = () => createToast("error", "참여가 완료된 상태입니다.");

  const handleComplete = () => {
    error();
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

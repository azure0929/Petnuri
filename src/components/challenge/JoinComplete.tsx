import styles from "@/styles/joincomplete.module.scss";
import { bottomSheetState } from "@/store/challengeState";
import { useSetRecoilState } from "recoil";

const JoinButton = () => {
  const setBottomIsOpen = useSetRecoilState(bottomSheetState);

  const handleComplete = () => {
    alert("이미 신청완료 된 상태입니다");
    setBottomIsOpen(true);
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

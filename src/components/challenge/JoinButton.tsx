import styles from "@/styles/joinbutton.module.scss";
import { bottomSheetState } from "@/store/challengeState";
import { useSetRecoilState } from "recoil";

const JoinButton = () => {
  const setBottomIsOpen = useSetRecoilState(bottomSheetState);

  return (
    <>
      <button
        className={styles.joinButton}
        onClick={() => {
          setBottomIsOpen(true);
        }}
      >
        <span className={styles.buttonText}>참여하기</span>
      </button>
    </>
  );
};

export default JoinButton;

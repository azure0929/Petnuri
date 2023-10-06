import styles from "@/styles/challenge/joinbutton.module.scss";
import {
  EventBottomSheetState,
  bottomSheetState,
} from "@/store/challengeState";
import { useSetRecoilState } from "recoil";
import JoinComplete from "@/components/challenge/JoinComplete";
import { getCookie } from "@/utils/Cookie";

interface JoinButtonProps {
  joinCheck: boolean | string;
}

const JoinButton: React.FC<JoinButtonProps> = ({ joinCheck }) => {
  const setEventBottomIsOpen = useSetRecoilState(EventBottomSheetState);
  const setBottomIsOpen = useSetRecoilState(bottomSheetState);

  let renderButton;
  if (joinCheck === false || joinCheck === "join") {
    renderButton = (
      <button
        className={styles.joinButton}
        onClick={() => {
          if (getCookie("jwtToken")) {
            setBottomIsOpen(true);
          }
          handleCookie();
        }}
      >
        <span className={styles.buttonText}>참여하기</span>
      </button>
    );
  } else if (joinCheck === "APPLY") {
    renderButton = (
      <button
        className={styles.joinButton}
        onClick={() => {
          setEventBottomIsOpen(true);
        }}
      >
        <span className={styles.buttonText}>인증하기</span>
      </button>
    );
  } else if (joinCheck === "KIT_REVIEW_COMPLETE") {
    renderButton = <JoinComplete />;
  }

  const handleCookie = () => {
    const token = getCookie("jwtToken");
    if (!token) {
      alert("로그인 후 참여가 가능합니다.");
    }
  };

  return <>{renderButton}</>;
};

export default JoinButton;

import styles from "@/styles/challenge/deliverybs/deliverybshead.module.scss";
import leftArrow from "@/assets/arrow_left_mid.svg";
import { bottomSheetState } from "@/store/challengeState";
import { useSetRecoilState } from "recoil";

interface DeliveryBSHeadProps {
  text?: string;
  onClick?: () => void;
}

const DeliveryBSHead = ({
  text = "참여 신청",
  onClick,
}: DeliveryBSHeadProps) => {
  const setBottomIsOpen = useSetRecoilState(bottomSheetState);

  const handleClick = onClick || (() => setBottomIsOpen(false));

  return (
    <>
      <div className={styles.headContanier}>
        <div className={styles.arrowImg} onClick={handleClick}>
          <img src={leftArrow}></img>
        </div>
        <div className={styles.header}>{text}</div>
      </div>
    </>
  );
};

export default DeliveryBSHead;

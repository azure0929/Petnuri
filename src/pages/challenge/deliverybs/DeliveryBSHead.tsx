import styles from "@/styles/deliverybs/deliverybshead.module.scss";
import leftArrow from "@/assets/arrow_left_mid.svg";
import { bottomSheetState } from "@/store/challengeState";
import { useSetRecoilState } from "recoil";

const DeliveryBSHead = ({text}) => {
  const setBottomIsOpen = useSetRecoilState(bottomSheetState);

  const onClickBack = () => {
    setBottomIsOpen(false);
  };

  return (
    <>
      <div className={styles.headContanier}>
        <div className={styles.arrowImg} onClick={onClickBack}>
          <img src={leftArrow}></img>
        </div>
        <div className={styles.header}>{text}</div>
      </div>
    </>
  );
};

export default DeliveryBSHead;

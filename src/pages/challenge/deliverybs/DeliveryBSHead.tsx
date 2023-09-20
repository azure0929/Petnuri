import styles from "@/styles/challenge/deliverybs/deliverybshead.module.scss";
import leftArrow from "@/assets/arrow_left_mid.svg";
import { bottomSheetState } from "@/store/challengeState";
import { useSetRecoilState } from "recoil";

const DeliveryBSHead = () => {
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
        <div className={styles.header}>배송지 입력</div>
      </div>
    </>
  );
};

export default DeliveryBSHead;

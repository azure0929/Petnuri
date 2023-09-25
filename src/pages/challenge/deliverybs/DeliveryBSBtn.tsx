import styles from "@/styles/challenge/deliverybs/deliverybsbtn.module.scss";
import { bottomSheetState } from "@/store/challengeState";
import { useSetRecoilState } from "recoil";

interface DeliveryBSBtnProps {
  data: any;
}

const DeliveryBSBtn: React.FC<DeliveryBSBtnProps> = ({ data }) => {
  const setBottomIsOpen = useSetRecoilState(bottomSheetState);

  // 추가
  const clickHandler = () => {
    if (data.address) {
      alert("신청이 완료되었습니다.");
      console.log(data.address);
      setBottomIsOpen(false);
    } else {
      alert("필수 입력을 확인해주세요.");
    }
  };

  return (
    <>
      <>
        <button className={styles.checkBtn} onClick={clickHandler}>
          <span>참여 신청</span>
        </button>
      </>
    </>
  );
};

export default DeliveryBSBtn;

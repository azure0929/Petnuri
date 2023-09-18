import styles from "@/styles/deliverybs/deliverybsbtn.module.scss";
import { bottomSheetState } from "@/store/challengeState";
import { useSetRecoilState } from "recoil";

interface DeliveryBSBtnProps {
  data: any;
}

const DeliveryBSBtn: React.FC<DeliveryBSBtnProps> = ({ data }) => {
  const setBottomIsOpen = useSetRecoilState(bottomSheetState);

  // 추가
  const clickHandler = () => {
    if (data.address === "") {
      alert("상세주소를 입력해주세요.");
      console.log(data);
    } else {
      setBottomIsOpen(false);
      console.log(data);
    }
  };

  return (
    <>
      <button className={styles.checkBtn} onClick={clickHandler}>
        <span>참여 신청</span>
      </button>
    </>
  );
};

export default DeliveryBSBtn;

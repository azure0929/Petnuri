import styles from "@/styles/challenge/deliverybs/deliverybsbtn.module.scss";
import { bottomSheetState } from "@/store/challengeState";
import { useSetRecoilState } from "recoil";
import { createToast } from "@/utils/ToastUtils";

interface DeliveryBSBtn {
  data: {
    address: DefaultAddress[];
    messageState: string;
    marketingCheck: boolean;
  };
}

const DeliveryBSBtn: React.FC<DeliveryBSBtn> = ({ data }) => {
  const setBottomIsOpen = useSetRecoilState(bottomSheetState);
  const correct = () => createToast("success", "참여 신청이 완료되었습니다.");
  // 추가
  const clickHandler = () => {
    if (data.address) {
      correct;
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

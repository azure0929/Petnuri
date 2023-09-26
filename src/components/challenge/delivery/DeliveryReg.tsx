import styles from "@/styles/challenge/deliverybs/deliverybsagree.module.scss";
import BottomSheet from "@/components/challenge/delivery/DeliveryBSLayout";
import DeliveryBSHead from "@/components/challenge/delivery/DeliveryBSHead";
import BottomButton from "@/components/challenge/BottomButton";
import DeliveryBSName from "@/components/challenge/delivery/DeliveryBSName";
import DeliveryBSContact from "@/components/challenge/delivery/DeliveryBSContact";
import DeliveryBSAddress from "@/components/challenge/delivery/DeliveryBSAddress";
import { useState, useEffect } from "react";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { BSTypeState, deliveryDataState } from "@/store/challengeState";

const DeliveryReg = () => {
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const deliveryData = useRecoilValue(deliveryDataState);
  const setBSType = useSetRecoilState(BSTypeState);

  const handleReg = () => {
    setBSType("DeliveryBS");
  };

  // 수령인 이름
  const [nameState, setNameState] = useState(deliveryData.name);
  const handleNameComplete = (name: string) => {
    setNameState(name);
  };

  // 수령인 연착서
  const [contactState, setContactState] = useState(deliveryData.phone);
  const handleContactComplete = (contact: string) => {
    setContactState(contact);
  };

  // 배송지 주소
  const [roadAdressState, setRoadAdressState] = useState(
    deliveryData.address1 || ""
  );
  const [detailAdressState, setDetailAdressState] = useState(
    deliveryData.address2 || ""
  );
  const [zipCodeState] = useState(deliveryData.zonecode || "");

  const handleAddressComplete = (address: string) => {
    const [road, detail] = address.split(' ');
    setRoadAdressState(road);
    setDetailAdressState(detail);
  };

  // 기본 배송지 설정 여부
  const [agreedCheck, setAgreeCheck] = useState(
    deliveryData.isSelected || false
  );

  const agreedBtnEvent = () => {
    setAgreeCheck(!agreedCheck);
  };

  useEffect(() => {
    if (
      nameState &&
      contactState &&
      roadAdressState &&
      detailAdressState &&
      zipCodeState
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [
    nameState,
    contactState,
    roadAdressState,
    detailAdressState,
    zipCodeState,
  ]);

  return (
    <>
      <BottomSheet>
        <DeliveryBSHead text={"배송지 등록"} onClick={handleReg} />
        <DeliveryBSName
          onNameComplete={handleNameComplete}
          initialName={nameState}
        />
        <DeliveryBSContact
          onContactComplete={handleContactComplete}
          initialContact={contactState}
        />
        <DeliveryBSAddress
          onAddressComplete={handleAddressComplete}
          initialRoadAddress={deliveryData.address1}
          initialDetailAddress={deliveryData.address2}
          initialZipCode={deliveryData.zonecode}
        />

        <div className={styles.form_agreement_box}>
          <div className={styles.form_agreement_item}>
            <input
              type="checkbox"
              id="check1"
              checked={agreedCheck}
              onChange={agreedBtnEvent}
              className="check"
            />
            <label htmlFor="check1" className={styles.agreementLabel}>
              <div className={styles.agreeTitle}>기본 배송지로 설정</div>
            </label>
          </div>
        </div>
        <BottomButton
          text={"배송지 등록하기"}
          isDisabled={isButtonDisabled}
          onClick={handleReg}
        />
      </BottomSheet>
    </>
  );
};

export default DeliveryReg;

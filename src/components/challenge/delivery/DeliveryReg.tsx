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
import { DeliveryRegApi } from "@/lib/apis/challengeApi";

const DeliveryReg = () => {
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const deliveryData = useRecoilValue(deliveryDataState);
  const setBSType = useSetRecoilState(BSTypeState);

  const handleReg = () => {
    setBSType("DeliveryBS");
  };

  const regApi = async () => {
    try {
      const deliveryInfo = {
        name: nameState,
        phone: contactState,
        roadAddress: addressInfoState.roadAddress,
        address: addressInfoState.detailAddress,
        zipcode: addressInfoState.zipCode,
        isBased: agreedCheck,
      };
      await DeliveryRegApi(deliveryInfo);
    } catch (error) {
      console.error("Failed to register delivery:", error);
    }
  };

  const postReg = async () => {
    await regApi();
    handleReg();
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

  const [addressInfoState, setAddressInfoState] = useState({
    roadAddress: deliveryData.roadAddress || "",
    detailAddress: deliveryData.address || "",
    zipCode: deliveryData.zipCode || "",
  });

  const handleAddressComplete = (addressInfo: {
    roadAddress: string;
    detailAddress: string;
    zipCode: string;
  }) => {
    setAddressInfoState(addressInfo);
  };

  // 기본 배송지 설정 여부
  const [agreedCheck, setAgreeCheck] = useState(false);

  const agreedBtnEvent = () => {
    setAgreeCheck(!agreedCheck);
  };  

  useEffect(() => {
    if (nameState && contactState && addressInfoState) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [nameState, contactState, addressInfoState]);

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
          initialRoadAddress={deliveryData.roadAddress}
          initialDetailAddress={deliveryData.address}
          initialZipCode={deliveryData.zipCode}
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
          onClick={postReg}
        />
      </BottomSheet>
    </>
  );
};

export default DeliveryReg;

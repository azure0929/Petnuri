import styles from '@/styles/deliverybs/deliverybsagree.module.scss'
import BottomSheet from "@/pages/challenge/deliverybs/DeliveryBSLayout";
import DeliveryBSHead from './deliverybs/DeliveryBSHead';
import BottomButton from '@/components/challenge/BottomButton';
import DeliveryBSName from "./deliverybs/DeliveryBSName";
import DeliveryBSContact from "./deliverybs/DeliveryBSContact";
import DeliveryBSAddress from "./deliverybs/DeliveryBSAddress";
import { useState, useEffect } from 'react'



const DeliveryReg = () => {
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const [agreedCheck, setAgreeCheck] = useState(false);

  const agreedBtnEvent = () => {
    if (agreedCheck === false) {
      setAgreeCheck(true);
    } else {
      setAgreeCheck(false);
    }
  };
  // 수령인 이름
  const [nameState, setNameState] = useState("");
  const handleNameComplete = (name: string) => {
    setNameState(name);
  };

  // 수령인 연착서
  const [contactState, setContactState] = useState("");
  const handleContactComplete = (contact: string) => {
    setContactState(contact);
  };

  // 배송지 주소
  const [addressState, setAddressState] = useState("");
  const handleAddressComplete = (address: string) => {
    setAddressState(address);
  };

  const data = {
    name: nameState,
    contact: contactState,
    address: addressState,
  };

    
  useEffect(() => {
    if (nameState && contactState && addressState) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [nameState, contactState, addressState]);

  return (
    <>
      <BottomSheet>
        <DeliveryBSHead text={'배송지 등록'}/>
        <DeliveryBSName onNameComplete={handleNameComplete} />
        <DeliveryBSContact onContactComplete={handleContactComplete} />
        <DeliveryBSAddress onAddressComplete={handleAddressComplete} />
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
        <BottomButton text={'배송지 등록하기'} isDisabled={isButtonDisabled}/>
      </BottomSheet>
    </>
  )
}

export default DeliveryReg
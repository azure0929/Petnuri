import { useState, ChangeEvent } from "react";
import styles from "@/styles/challenge/deliverybs/deliverybscontact.module.scss";

const DeliveryBSContact = ({ onContactComplete }) => {
  const [contactState, setContactState] = useState("");

  const handleNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    // 입력값에서 모든 하이픈(-)을 제거하고, 숫자만 남깁니다.
    const numericValue = inputValue.replace(/-/g, "").replace(/\D/g, "");

    // 숫자를 하이픈(-)으로 포맷팅합니다.
    const formattedValue = formatPhoneNumber(numericValue);

    setContactState(formattedValue);
    onContactComplete(formattedValue);
  };

  const formatPhoneNumber = (phoneNumber: string) => {
    if (phoneNumber.length <= 3) {
      return phoneNumber;
    } else if (phoneNumber.length <= 7) {
      return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3)}`;
    } else {
      return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(
        3,
        7
      )}-${phoneNumber.slice(7, 11)}`;
    }
  };

  return (
    <>
      <div className={styles.contactContainer}>
        <div className={styles.userContact}>수령인 연락처</div>
        <input
          type="tel"
          className={styles.userContactInput}
          placeholder="010-0000-0000"
          value={contactState}
          onChange={handleNumberChange}
        />
      </div>
    </>
  );
};

export default DeliveryBSContact;

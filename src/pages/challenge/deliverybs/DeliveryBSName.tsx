import { useState, ChangeEvent, useEffect } from "react";
import styles from "@/styles/deliverybs/deliverybsname.module.scss";

interface DeliveryBSNameProps {
  onNameComplete: any;
}

const DeliveryBSName: React.FC<DeliveryBSNameProps> = ({ onNameComplete }) => {
  const [nameState, setNameState] = useState("");

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setNameState(inputValue);
    onNameComplete(inputValue);
  };

  return (
    <>
      <div className={styles.nameContainer}>
        <div className={styles.userName}>수령인 이름</div>
        <input
          title="text"
          className={styles.userNameInput}
          placeholder="성함을 입력해주세요"
          value={nameState}
          onChange={handleNameChange}
        />
      </div>
    </>
  );
};

export default DeliveryBSName;

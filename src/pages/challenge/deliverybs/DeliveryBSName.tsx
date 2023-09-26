import { useState, ChangeEvent } from "react";
import styles from "@/styles/challenge/deliverybs/deliverybsname.module.scss";

interface DeliveryBSNameProps {
  onNameComplete: any;
  initialName?: string;
}

const DeliveryBSName: React.FC<DeliveryBSNameProps> = ({ onNameComplete, initialName = '' }) => {
  const [nameState, setNameState] = useState(initialName);

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

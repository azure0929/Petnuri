import styles from "@/styles/deliverybs/deliverybsmessage.module.scss";
import { useState, ChangeEvent } from "react";

const DeliveryBSmessage = ({ onMessageComplete }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [customInput, setCustomInput] = useState("");

  // select
  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    onMessageComplete(selectedValue);

    // "직접입력" 옵션을 선택했을 때, 입력 필드를 보이도록 설정
    if (selectedValue === "직접입력") {
      setCustomInput(""); // 직접 입력 필드를 초기화
    }
  };

  const handleCustomInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setCustomInput(inputValue);
    onMessageComplete(inputValue);
  };
  return (
    <>
      <div className={styles.messageContainer}>
        <div className={styles.message}>배송 메세지 입력</div>
        {selectedOption !== "직접입력" && (
          <select
            className={styles.messageSelect}
            value={selectedOption}
            onChange={handleSelectChange}
            name="부재시 문앞에 놓아주세요"
          >
            <option value="부재시 문앞에 놓아주세요">
              부재시 문앞에 놓아주세요
            </option>
            <option value="부재시 경비실에 맡겨주세요">
              부재시 경비실에 맡겨주세요
            </option>
            <option value="배송전 필히 연락 부탁드립니다">
              배송전 필히 연락 부탁드립니다
            </option>
            <option value="직접입력">직접입력</option>
          </select>
        )}

        {selectedOption === "직접입력" && (
          <input
            type="text"
            className={styles.customInput}
            placeholder="직접 입력하세요"
            value={customInput}
            onChange={handleCustomInputChange}
          />
        )}
      </div>
    </>
  );
};

export default DeliveryBSmessage;

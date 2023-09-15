import { useState, ChangeEvent } from "react";
import styles from "@/styles/deliverybs/deliverybsreward.module.scss";

const DeliveryBSReward: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>("");

  // select
  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
  };

  return (
    <>
      {/* 리워트 선택 */}
      <div className={styles.selectContainer}>
        <div className={styles.selectRewardTitle}>리워드 선택</div>
        <select
          className={styles.selectReward}
          value={selectedOption}
          onChange={handleSelectChange}
        >
          <option value="카테고리를 선택해주세요">
            카테고리를 선택해주세요
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
    </>
  );
};
export default DeliveryBSReward;

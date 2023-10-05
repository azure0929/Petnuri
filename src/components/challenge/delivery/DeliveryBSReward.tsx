import { useState, useEffect, ChangeEvent } from "react";
import styles from "@/styles/challenge/deliverybs/deliverybsreward.module.scss";
import { rewardApi } from "@/lib/apis/challengeApi";

interface DeliveryBSRewardProps {
  rewardId: number;
  setRewardId: (rewardId: number) => void;
}

const DeliveryBSReward: React.FC<DeliveryBSRewardProps> = ({
  rewardId,
  setRewardId,
}) => {
  const [rewardData, setRewardData] = useState<RewardData[]>([]);

  useEffect(() => {
    const reward = async () => {
      try {
        const response = await rewardApi();
        setRewardData(response.challengeProducts);
      } catch (error) {
        console.error("Error in reward: " + error);
      }
    };
    reward();
  }, []);

  // select
  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = parseInt(event.target.value, 10);
    setRewardId(selectedValue);
  };

  return (
    <>
      {/* 리워트 선택 */}
      <div className={styles.selectContainer}>
        <div className={styles.selectRewardTitle}>리워드 선택</div>
        <select
          className={styles.selectReward}
          value={rewardId}
          onChange={handleSelectChange}
        >
          <option value="카테고리를 선택해주세요">
            카테고리를 선택해주세요
          </option>
          {rewardData ? (
            <>
              {rewardData.map((reward) => (
                <option key={reward.id} value={reward.id}>
                  {reward.name}
                </option>
              ))}
            </>
          ) : null}
        </select>
      </div>
    </>
  );
};
export default DeliveryBSReward;

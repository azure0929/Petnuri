import styles from "@/styles/fulladress.module.scss";
import BottomSheet from "@/components/challenge/delivery/DeliveryBSLayout";
import DeliveryBSHead from "@/components/challenge/delivery/DeliveryBSHead";
import FullAdress from "@/components/challenge/FullAdress";
import BottomButton from "@/components/challenge/BottomButton";
import { useState, useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { BSTypeState } from "@/store/challengeState";

const DeliveryList = () => {
  const [privacy, setPrivacy] = useState<Privacy[]>();
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Privacy | null>(null);
  const setBSType = useSetRecoilState(BSTypeState);

  const handleReg = () => {
    setBSType("DeliveryBS");
  };

  const handleSelect = (item: Privacy) => {
    setSelectedItem(item);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/Privacy.json");
      const data = await response.json();
      setPrivacy(data.data);
      const defaultItem = data.data.find((item: Privacy) => item.default);
      setSelectedItem(defaultItem);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (privacy && privacy.length >= 2) {
      setButtonDisabled(true);
    } else {
      setButtonDisabled(false);
    }
  }, [privacy]);

  return (
    <>
      <BottomSheet>
        <DeliveryBSHead text="배송지 목록" onClick={handleReg} />
        {privacy?.map((item) => (
          <FullAdress
            key={item.id}
            item={item}
            isSelected={selectedItem === item}
            onSelect={() => handleSelect(item)}
          />
        ))}
        {privacy && privacy.length >= 2 && (
          <p className={styles.bottom_text}>
            배송지는 최대 2개까지 등록이 가능합니다. <br />
            삭제 후 등록하거나 배송지 정보를 수정해주세요
          </p>
        )}
        <BottomButton
          text={"추가하기"}
          isDisabled={isButtonDisabled}
          onClick={handleReg}
        />
      </BottomSheet>
    </>
  );
};

export default DeliveryList;

import BottomSheet from "@/pages/challenge/deliverybs/DeliveryBSLayout";
import DeliveryBSHead from '@/pages/challenge/deliverybs/DeliveryBSHead';
import FullAdress from '@/components/challenge/FullAdress';
import BottomButton from '@/components/challenge/BottomButton';
import { useState, useEffect } from 'react'

const DeliveryList = () => {
  const [privacy,setPrivacy] = useState<Privacy[]>()
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Privacy | null>(null);

  const handleSelect = (item: Privacy) => {
    setSelectedItem(item);
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/Privacy.json');
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
        <DeliveryBSHead text='배송지 목록'/>
        {privacy?.map((item) =>
          <FullAdress 
          key={item.name} 
          item={item} 
          isSelected={selectedItem === item}
          onSelect={() => handleSelect(item)}
          />
        )}
        {privacy && privacy.length >= 2 && (
          <p>배송지는 최대 2개까지 등록이 가능합니다. <br />
          기존 배송지 정보를 수정해주세요</p>
        )}
        <BottomButton text={'추가하기'} isDisabled={isButtonDisabled}/>
      </BottomSheet>
    </>
  )
}

export default DeliveryList
import { useState } from "react";
import BottomSheet from "@/pages/challenge/deliverybs/DeliveryBSLayout";
import DeliveryBSHead from "./DeliveryBSHead";
import DeliveryBSName from "./DeliveryBSName";
import DeliveryBSContact from "./DeliveryBSContact";
import DeliveryBSAddress from "./DeliveryBSAddress";
import DeliveryBSmessage from "./DeliveryBSmessage";
import DeliveryBSAgree from "./DeliveryBSAgree";
import DeliveryBSBtn from "./DeliveryBSBtn";
import DeliveryBSReward from "./DeliveryBSReward";

const DeliveryBS = () => {
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

  // 배송 메세지
  const [messageState, setMessageState] = useState("부재시 문앞에 놓아주세요");

  const handleMessageComplete = (message: string) => {
    setMessageState(message);
  };
  //약관 전체동의
  // const [agreeState, setAgreeState] = useState([]);

  // 객체화
  const data = {
    name: nameState,
    contact: contactState,
    address: addressState,
    message: messageState,
  };

  return (
    <BottomSheet>
      <DeliveryBSHead text = '배송지 입력'/>
      <DeliveryBSName onNameComplete={handleNameComplete} />
      <DeliveryBSContact onContactComplete={handleContactComplete} />
      <DeliveryBSAddress onAddressComplete={handleAddressComplete} />
      <DeliveryBSmessage onMessageComplete={handleMessageComplete} />
      <DeliveryBSReward />
      <DeliveryBSAgree />
      <DeliveryBSBtn data={data} />
    </BottomSheet>
  );
};

export default DeliveryBS;

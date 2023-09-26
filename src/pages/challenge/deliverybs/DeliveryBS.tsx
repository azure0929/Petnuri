import { useState, useEffect } from "react";
import BottomSheet from "@/pages/challenge/deliverybs/DeliveryBSLayout";
import DeliveryBSHead from "./DeliveryBSHead";
// import DeliveryBSName from "./DeliveryBSName";
// import DeliveryBSContact from "./DeliveryBSContact";
// import DeliveryBSAddress from "./DeliveryBSAddress";
import DeliveryBSmessage from "./DeliveryBSmessage";
import DeliveryBSAgree from "./DeliveryBSAgree";
import DeliveryBSBtn from "./DeliveryBSBtn";
import DeliveryBSReward from "./DeliveryBSReward";
import Address from "./Address";
import { SizeContextProvider } from "antd/es/config-provider/SizeContext";
import styles from "@/styles/challenge/deliverybs/deliverybs.module.scss";

const DeliveryBS = () => {
  // 수령인 이름
  // const [nameState, setNameState] = useState("");

  // const handleNameComplete = (name: string) => {
  //   setNameState(name);
  // };

  // // 수령인 연착서
  // const [contactState, setContactState] = useState("");

  // const handleContactComplete = (contact: string) => {
  //   setContactState(contact);
  // };

  // 배송지 주소
  // const [addressState, setAddressState] = useState("");

  // const handleAddressComplete = (address: string) => {
  //   setAddressState(address);
  // };

  const [addressData, setAddressData] = useState<defaultAddressArray>([]);

  useEffect(() => {
    const AddressApi = async () => {
      try {
        const response = await fetch("/DeliveryAddress.json");
        const data = await response.json();
        setAddressData(data.data);
      } catch (error) {
        console.error("Address Api error : " + error);
      }
    };

    AddressApi();
  }, []);

  const defaultAddress = addressData.filter((item) => item.default === true);
  // 배송 메세지
  const [messageState, setMessageState] = useState("부재시 문앞에 놓아주세요");

  const handleMessageComplete = (message: string) => {
    setMessageState(message);
  };
  // 약관 전체동의
  // const [agreeState, setAgreeState] = useState([]);

  const [agreedCheck, setAgreedCheck] = useState(false);
  const handleAgreedCheckChange = (value: boolean) => {
    console.log("agreecheck value : " + value);
    setAgreedCheck(value);
  };

  const [ruleCheck, setRuleCheck] = useState(false);
  const handleRuleCheckChange = (value: boolean) => {
    console.log("rulecheck value : " + value);
    setRuleCheck(value);
  };

  const [exchangeCheck, setExchangeCheck] = useState(false);
  const handleExchangeCheckChange = (value: boolean) => {
    console.log("exchangecheck value : " + value);
    setExchangeCheck(value);
  };

  const [marketingCheck, setMarketingCheck] = useState(false);
  const handleMarketingCheck = (value: boolean) => {
    // marketingCheck 값(value)을 사용
    console.log("marketcheck value : " + value);
    setMarketingCheck(value);
  };

  const data = {
    address: defaultAddress,
    messageState: messageState,
    marketingCheck: marketingCheck,
  };

  return (
    <BottomSheet>
      <DeliveryBSHead text={"참여 신청"} />
      {/* <DeliveryBSName onNameComplete={handleNameComplete} />
      <DeliveryBSHead text = '배송지 입력'/>
      <DeliveryBSName onNameComplete={handleNameComplete} />
      <DeliveryBSContact onContactComplete={handleContactComplete} />
      <DeliveryBSAddress onAddressComplete={handleAddressComplete} /> */}
      {/* <DeliveryBSmessage onMessageComplete={handleMessageComplete} /> */}
      <DeliveryBSReward />
      {defaultAddress ? (
        <>
          <Address addressData={defaultAddress} />
          <DeliveryBSmessage
            onMessageComplete={handleMessageComplete}
            defaultAddress={defaultAddress}
          />
          <DeliveryBSAgree
            defaultAddress={defaultAddress}
            onAgreedCheckChange={handleAgreedCheckChange}
            onRuleCheckChange={handleRuleCheckChange}
            onExchangeCheckChange={handleExchangeCheckChange}
            onMarketingCheckChange={handleMarketingCheck}
          />
        </>
      ) : null}

      {defaultAddress.length > 0 &&
      agreedCheck &&
      ruleCheck &&
      exchangeCheck ? (
        <DeliveryBSBtn data={data} />
      ) : (
        <>
          <button className={styles.noCheckBtn}>
            <span>참여 신청</span>
          </button>
        </>
      )}
    </BottomSheet>
  );
};

export default DeliveryBS;

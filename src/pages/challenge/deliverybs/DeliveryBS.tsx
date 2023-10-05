import { useState, useEffect } from "react";
import BottomSheet from "@/components/challenge/delivery/DeliveryBSLayout";
import DeliveryBSHead from "@/components/challenge/delivery/DeliveryBSHead";
// import DeliveryBSName from "./DeliveryBSName";
// import DeliveryBSContact from "./DeliveryBSContact";
// import DeliveryBSAddress from "./DeliveryBSAddress";
import DeliveryBSmessage from "@/components/challenge/delivery/DeliveryBSmessage";
import DeliveryBSAgree from "@/components/challenge/delivery/DeliveryBSAgree";
import DeliveryBSReward from "@/components/challenge/delivery/DeliveryBSReward";
import Address from "@/components/challenge/delivery/Address";
import styles from "@/styles/challenge/deliverybs/deliverybs.module.scss";
import {
  ContestParticipationApi,
  DeliveryListApi,
} from "@/lib/apis/challengeApi";
import { bottomSheetState } from "@/store/challengeState";
import { useSetRecoilState } from "recoil";
import { createToast } from "@/utils/ToastUtils";

const DeliveryBS = () => {
  const setBottomIsOpen = useSetRecoilState(bottomSheetState);

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

  const [addressData, setAddressData] = useState<DefaultAddressArray>([]);

  const defaultAddress = addressData
    ? addressData.filter((item) => item.isBased === true)
    : [];
  // 배송 메세지
  const [messageState, setMessageState] = useState("부재시 문앞에 놓아주세요");

  const handleMessageComplete = (message: string) => {
    setMessageState(message);
  };
  // 약관 전체동의
  // const [agreeState, setAgreeState] = useState([]);

  const [agreedCheck, setAgreedCheck] = useState(false);
  const handleAgreedCheckChange = (value: boolean) => {
    setAgreedCheck(value);
  };

  const [ruleCheck, setRuleCheck] = useState(false);
  const handleRuleCheckChange = (value: boolean) => {
    setRuleCheck(value);
  };

  const [exchangeCheck, setExchangeCheck] = useState(false);
  const handleExchangeCheckChange = (value: boolean) => {
    setExchangeCheck(value);
  };

  const [marketingCheck, setMarketingCheck] = useState(false);
  const handleMarketingCheck = (value: boolean) => {
    // marketingCheck 값(value)을 사용
    setMarketingCheck(value);
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await DeliveryListApi();
      setAddressData(data);
    };
    fetchData();
  }, []);

  const [deliveryData, setDeliveryData] = useState<DeliveryData | null>(null);

  useEffect(() => {
    const participationApi = async () => {
      if (deliveryData) {
        await ContestParticipationApi(deliveryData);
      }
    };
    participationApi();
  }, [deliveryData]);

  const correct = () => createToast("success", "참여 신청이 완료되었습니다.");

  // 리워드 조회
  const [rewardId, setRewardId] = useState<number>(0);

  const clickHandler = () => {
    if (
      rewardId &&
      defaultAddress &&
      agreedCheck &&
      ruleCheck &&
      exchangeCheck
    ) {
      const newDeliveryData: DeliveryData = {
        rewardId: rewardId, // rewardId 값을 설정해야 함
        isConsentedPersonalInfo: marketingCheck,
        delivery: {
          name: defaultAddress[0].name,
          phone: defaultAddress[0].phone,
          roadAddress: defaultAddress[0].roadAddress,
          address: defaultAddress[0].address,
          zipcode: defaultAddress[0].zipcode,
          message: messageState,
        },
      };
      setDeliveryData(newDeliveryData);
      correct();
      setBottomIsOpen(false);
    } else if (
      (agreedCheck && ruleCheck && exchangeCheck) ||
      rewardId ||
      defaultAddress ||
      messageState
    ) {
      alert("필수 입력값을 넣어주세요.");
    }
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
      <DeliveryBSReward rewardId={rewardId} setRewardId={setRewardId} />
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
        <>
          <button className={styles.checkBtn} onClick={clickHandler}>
            <span>참여 신청</span>
          </button>
        </>
      ) : (
        <>
          <button className={styles.noCheckBtn} onClick={clickHandler}>
            <span>참여 신청</span>
          </button>
        </>
      )}
    </BottomSheet>
  );
};

export default DeliveryBS;

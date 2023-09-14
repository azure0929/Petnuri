import BottomSheet from "@/components/BottomSheet";
import styles from "@/styles/deliverybs.module.scss";
import { useState, useEffect } from "react";
import DaumPostcode from "react-daum-postcode";
import Modal from "react-modal"; // 추가
import { bottomSheetState } from "@/store/challengeState";
import { useSetRecoilState } from "recoil";

const DeliveryBS = () => {
  const [zipCode, setZipcode] = useState<string>("");
  const [roadAddress, setRoadAddress] = useState<string>("");
  const [detailAddress, setDetailAddress] = useState<string>(""); // 추가
  const [isOpen, setIsOpen] = useState<boolean>(false); //추가
  const setBottomIsOpen = useSetRecoilState(bottomSheetState);
  const [selectedOption, setSelectedOption] = useState("");
  const [customInput, setCustomInput] = useState("");

  const completeHandler = (data: any) => {
    setZipcode(data.zonecode);
    setRoadAddress(data.roadAddress);
    setIsOpen(false); //추가
  };

  // Modal 스타일
  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0,0,0,0.5)",
    },
    content: {
      left: "0",
      margin: "auto",
      width: "500px",
      height: "400px",
      padding: "0",
      //   overflow: "hidden",
    },
  };

  // 검색 클릭
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  // 상세 주소검색 event
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDetailAddress(e.target.value);
  };

  // 추가
  const clickHandler = () => {
    if (detailAddress === "") {
      alert("상세주소를 입력해주세요.");
    } else {
      console.log(zipCode, roadAddress, detailAddress);
      setBottomIsOpen(false);
    }
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  // select
  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);

    // "직접입력" 옵션을 선택했을 때, 입력 필드를 보이도록 설정
    if (selectedValue === "직접입력") {
      setCustomInput(""); // 직접 입력 필드를 초기화
    }
  };

  const handleCustomInputChange = (event) => {
    const inputValue = event.target.value;
    setCustomInput(inputValue);
  };

  // 약관 동의
  const [allCheck, setAllCheck] = useState(false);
  const [ageCheck, setAgeCheck] = useState(false);
  const [useCheck, setUseCheck] = useState(false);
  const [marketingCheck, setMarketingCheck] = useState(false);

  const allBtnEvent = () => {
    if (allCheck === false) {
      setAllCheck(true);
      setAgeCheck(true);
      setUseCheck(true);
      setMarketingCheck(true);
    } else {
      setAllCheck(false);
      setAgeCheck(false);
      setUseCheck(false);
      setMarketingCheck(false);
    }
  };

  const ageBtnEvent = () => {
    if (ageCheck === false) {
      setAgeCheck(true);
    } else {
      setAgeCheck(false);
    }
  };

  const useBtnEvent = () => {
    if (useCheck === false) {
      setUseCheck(true);
    } else {
      setUseCheck(false);
    }
  };

  const marketingBtnEvent = () => {
    if (marketingCheck === false) {
      setMarketingCheck(true);
    } else {
      setMarketingCheck(false);
    }
  };

  useEffect(() => {
    if (ageCheck === true && useCheck === true && marketingCheck === true) {
      setAllCheck(true);
    } else {
      setAllCheck(false);
    }
  }, [ageCheck, useCheck, marketingCheck]);

  return (
    <BottomSheet>
      <div className={styles.bSHead}>
        <span>비대면 검진키드 수령장소 입력</span>
      </div>
      <div className={styles.nameContainer}>
        <div className={styles.userName}>수령인 이름</div>
        <input
          className={styles.userNameInput}
          placeholder="성함을 입력해주세요"
        />
      </div>
      <div className={styles.contactContainer}>
        <div className={styles.userContact}>수령인 연락처</div>
        <input
          className={styles.userContactInput}
          placeholder="010-0000-0000"
        />
      </div>
      <div className={styles.addressContainer}>
        <div className={styles.inputTitle}>배송지 입력</div>
        {/* <input value={zipCode} readOnly placeholder="우편번호" /> */}
        <input
          onClick={toggle}
          value={roadAddress}
          readOnly
          placeholder="주소지를 검색해주세요"
          className={styles.addressInput}
        />
        {/* <button onClick={toggle}>우편번호 검색</button> */}
        <Modal
          isOpen={isOpen}
          ariaHideApp={false}
          style={customStyles}
          onRequestClose={closeModal}
        >
          <DaumPostcode onComplete={completeHandler} />
          {/* <button onClick={closeModal}>close</button> */}
        </Modal>
        <input
          type="text"
          onChange={changeHandler}
          value={detailAddress}
          placeholder="상세 주소 입력"
          className={styles.detailAddress}
        />
        <div className={styles.messageContainer}>
          <div className={styles.message}>배송 메세지 입력</div>
          {selectedOption !== "직접입력" && (
            <select
              className={styles.messageSelect}
              value={selectedOption}
              onChange={handleSelectChange}
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
        <div className={styles.selectContainer}>
          <div className={styles.selectReward}>리워드 선택</div>
          <select
            className={styles.messageSelect}
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

        {/* 약관 동의 */}
        <div>
          <div className={styles.form_agreement_box}>
            <div className={styles.form_agreement_all}>
              <input
                type="checkbox"
                id="all-check"
                checked={allCheck}
                onChange={allBtnEvent}
              />
              <label htmlFor="all-check">전체동의</label>
            </div>
            <div className={styles.form_agreement_item}>
              <input
                type="checkbox"
                id="check1"
                checked={ageCheck}
                onChange={ageBtnEvent}
              />
              <label htmlFor="check1">
                만 14세 이상입니다 <span className={styles.blue}>(필수)</span>
              </label>
            </div>
            <div className={styles.form_agreement_item}>
              <input
                type="checkbox"
                id="check2"
                checked={useCheck}
                onChange={useBtnEvent}
              />
              <label htmlFor="check2">
                이용약관 <span className={styles.blue}>(필수)</span>
              </label>
            </div>
            <div className={styles.form_agreement_item}>
              <input
                type="checkbox"
                id="check3"
                checked={marketingCheck}
                onChange={marketingBtnEvent}
              />
              <label htmlFor="check3">
                마케팅 동의 <span className={styles.gray}>(선택)</span>
              </label>
            </div>
          </div>
        </div>
        {}
        <button className={styles.checkBtn} onClick={clickHandler}>
          <span>참여 신청</span>
        </button>
      </div>
    </BottomSheet>
  );
};

export default DeliveryBS;

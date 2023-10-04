import { useState, useEffect } from "react";
import styles from "@/styles/challenge/deliverybs/deliverybsagree.module.scss";
import rightArrow from "@/assets/arrow_right_small.svg";
import ModalAgree from "./ModalAgree";
import ModalRule from "./ModalRule";
import ModalExchange from "./ModalExchange";
import ModalMarkgeting from "./ModalMarketing";

interface DeliveryBSAgreeProps {
  onAgreedCheckChange: (value: boolean) => void;
  onRuleCheckChange: (value: boolean) => void;
  onExchangeCheckChange: (value: boolean) => void;
  onMarketingCheckChange: (value: boolean) => void;
  defaultAddress: DefaultAddressArray;
}

const DeliveryBSAgree: React.FC<DeliveryBSAgreeProps> = ({
  onAgreedCheckChange,
  onRuleCheckChange,
  onExchangeCheckChange,
  onMarketingCheckChange,
  defaultAddress,
}) => {
  // 약관 동의
  const [allCheck, setAllCheck] = useState(false);
  const [agreedCheck, setAgreeCheck] = useState(false);
  const [ruleCheck, setRuleCheck] = useState(false);
  const [exchangeCheck, setExchangeCheck] = useState(false);
  const [marketingCheck, setMarketingCheck] = useState(false);

  const allBtnEvent = () => {
    if (allCheck === false) {
      setAllCheck(true);
      setAgreeCheck(true);
      setRuleCheck(true);
      setExchangeCheck(true);
      setMarketingCheck(true);
    } else {
      setAllCheck(false);
      setAgreeCheck(false);
      setRuleCheck(false);
      setExchangeCheck(false);
      setMarketingCheck(false);
    }
  };

  const agreedBtnEvent = () => {
    if (agreedCheck === false) {
      setAgreeCheck(true);
    } else {
      setAgreeCheck(false);
    }
  };

  const ruleBtnEvent = () => {
    if (ruleCheck === false) {
      setRuleCheck(true);
    } else {
      setRuleCheck(false);
    }
  };

  const exchangeBtnEvent = () => {
    if (exchangeCheck === false) {
      setExchangeCheck(true);
    } else {
      setExchangeCheck(false);
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
    if (
      agreedCheck === true &&
      ruleCheck === true &&
      exchangeCheck === true &&
      marketingCheck === true
    ) {
      setAllCheck(true);
    } else {
      setAllCheck(false);
    }
  }, [agreedCheck, ruleCheck, exchangeCheck, marketingCheck]);

  useEffect(() => {
    // allCheck 상태가 변경될 때, 모든 하위 체크박스의 checked 속성을 allCheck 값으로 설정
    if (allCheck === true) {
      setAgreeCheck(true);
      setRuleCheck(true);
      setExchangeCheck(true);
      setMarketingCheck(true);
    }
  }, [allCheck]);

  // marketingCheck 상태가 변경될 때, 부모 컴포넌트로 값을 전달
  useEffect(() => {
    onAgreedCheckChange(agreedCheck);
    onRuleCheckChange(ruleCheck);
    onExchangeCheckChange(exchangeCheck);
    onMarketingCheckChange(marketingCheck);
  }, [agreedCheck, ruleCheck, exchangeCheck, marketingCheck]);

  // agree 모달
  const [agreeModalOpen, setAgreeModalOpen] = useState<boolean>(false);

  const openAgreeModal = () => {
    setAgreeModalOpen(true);
  };

  const closeAgreeModal = () => {
    setAgreeModalOpen(false);
  };

  // rule모달
  const [ruleModalOpen, setRuleModalOpen] = useState<boolean>(false);

  const openRuleModal = () => {
    setRuleModalOpen(true);
  };

  const closeRuleModal = () => {
    setRuleModalOpen(false);
  };

  // exchange 모달
  const [exchangeModalOpen, setExchangeModalOpen] = useState<boolean>(false);

  const openExchangeModal = () => {
    setExchangeModalOpen(true);
  };

  const closeExchangeModal = () => {
    setExchangeModalOpen(false);
  };

  // Marketing 모달
  const [marketingModalOpen, setMarketingModalOpen] = useState<boolean>(false);

  const openMarketingModal = () => {
    setMarketingModalOpen(true);
  };

  const closeMarketingModal = () => {
    setMarketingModalOpen(false);
  };

  return (
    <>
      {/* 약관 동의 */}
      {defaultAddress && defaultAddress.length > 0 ? (
        <div>
          <div className={styles.form_agreement_box}>
            <div className={styles.form_agreement_all}>
              <input
                type="checkbox"
                id="all-check"
                checked={allCheck}
                onChange={allBtnEvent}
                className={styles.allCheck}
              />
              <label htmlFor="all-check" className={styles.agreementLabel}>
                <span>약관 전체동의</span>
              </label>
            </div>
            <div className={styles.form_agreement_item}>
              <input
                type="checkbox"
                id="check1"
                checked={agreedCheck}
                onChange={agreedBtnEvent}
                className="check"
              />
              <label htmlFor="check1" className={styles.agreementLabel}>
                <div className={styles.agreeTitle}>이용약관</div>
                <span className={styles.red}>*</span>
              </label>
              <div onClick={openAgreeModal} className={styles.arrowImg}>
                <img src={rightArrow} className={styles.rightArrow} />
              </div>
            </div>
            <div className={styles.form_agreement_item}>
              <input
                type="checkbox"
                id="check2"
                checked={ruleCheck}
                onChange={ruleBtnEvent}
                className="check"
              />
              <label htmlFor="check2" className={styles.agreementLabel}>
                <div className={styles.agreeTitle}>참가규칙</div>
                <span className={styles.red}>*</span>
              </label>
              <div onClick={openRuleModal}>
                <img src={rightArrow} className={styles.rightArrow} />
              </div>
            </div>
            <div className={styles.form_agreement_item}>
              <input
                type="checkbox"
                id="check3"
                checked={exchangeCheck}
                onChange={exchangeBtnEvent}
                className="check"
              />
              <label htmlFor="check3" className={styles.agreementLabel}>
                <div className={styles.agreeTitle}>교환 및 반품 정책</div>
                <span className={styles.red}>*</span>
              </label>
              <div onClick={openExchangeModal}>
                <img src={rightArrow} className={styles.rightArrow} />
              </div>
            </div>
            <div className={styles.form_agreement_item}>
              <input
                type="checkbox"
                id="check4"
                checked={marketingCheck}
                onChange={marketingBtnEvent}
                className="check"
              />
              <label htmlFor="check4" className={styles.agreementLabel}>
                <div className={styles.agreeTitle}>
                  개인정보 제 3자 정보 제공 활용 동의
                </div>
              </label>
              <div onClick={openMarketingModal}>
                <img src={rightArrow} className={styles.rightArrow} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div>
            <div className={styles.form_agreement_box}>
              <div className={styles.form_agreement_all}>
                <input
                  type="checkbox"
                  id="all-check"
                  checked={allCheck}
                  className={styles.allCheck}
                />
                <label htmlFor="all-check" className={styles.agreementLabel}>
                  <span>약관 전체동의</span>
                </label>
              </div>
              <div className={styles.form_agreement_item}>
                <input
                  type="checkbox"
                  id="check1"
                  checked={agreedCheck}
                  className="check"
                />
                <label htmlFor="check1" className={styles.agreementLabel}>
                  <div className={styles.agreeTitle}>이용약관</div>
                  <span className={styles.red}>*</span>
                </label>
                <div className={styles.arrowImg}>
                  <img src={rightArrow} className={styles.rightArrow} />
                </div>
              </div>
              <div className={styles.form_agreement_item}>
                <input
                  type="checkbox"
                  id="check2"
                  checked={ruleCheck}
                  className="check"
                />
                <label htmlFor="check2" className={styles.agreementLabel}>
                  <div className={styles.agreeTitle}>참가규칙</div>
                  <span className={styles.red}>*</span>
                </label>
                <div>
                  <img src={rightArrow} className={styles.rightArrow} />
                </div>
              </div>
              <div className={styles.form_agreement_item}>
                <input
                  type="checkbox"
                  id="check3"
                  checked={exchangeCheck}
                  className="check"
                />
                <label htmlFor="check3" className={styles.agreementLabel}>
                  <div className={styles.agreeTitle}>교환 및 반품 정책</div>
                  <span className={styles.red}>*</span>
                </label>
                <div>
                  <img src={rightArrow} className={styles.rightArrow} />
                </div>
              </div>
              <div className={styles.form_agreement_item}>
                <input
                  type="checkbox"
                  id="check4"
                  checked={marketingCheck}
                  className="check"
                />
                <label htmlFor="check4" className={styles.agreementLabel}>
                  <div className={styles.agreeTitle}>
                    개인정보 제 3자 정보 제공 활용 동의
                  </div>
                </label>
                <div>
                  <img src={rightArrow} className={styles.rightArrow} />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      <ModalAgree
        isOpen={agreeModalOpen}
        closeModal={closeAgreeModal}
        setAgreeCheck={setAgreeCheck}
      />
      <ModalRule
        isOpen={ruleModalOpen}
        closeModal={closeRuleModal}
        setRuleCheck={setRuleCheck}
      />
      <ModalExchange
        isOpen={exchangeModalOpen}
        closeModal={closeExchangeModal}
        setExchangeCheck={setExchangeCheck}
      />
      <ModalMarkgeting
        isOpen={marketingModalOpen}
        closeModal={closeMarketingModal}
        setMarketingCheck={setMarketingCheck}
      />
    </>
  );
};

export default DeliveryBSAgree;

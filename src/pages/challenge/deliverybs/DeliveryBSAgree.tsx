import { useState, useEffect } from "react";
import styles from "@/styles/deliverybs/deliverybsagree.module.scss";

const DeliveryBSAgree = () => {
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
  return (
    <>
      {/* 약관 동의 */}
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
              <span>이용약관</span>
              <span className={styles.red}>*</span>
            </label>
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
              <span>참가규칙</span>
              <span className={styles.red}>*</span>
            </label>
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
              <span>교환 및 반품 정책</span>
              <span className={styles.red}>*</span>
            </label>
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
              <span>개인정보 제 3자 정보 제공 활용 동의</span>
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeliveryBSAgree;

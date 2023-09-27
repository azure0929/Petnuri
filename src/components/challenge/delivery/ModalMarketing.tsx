import Modal from "react-modal";
import styles from "@/styles/challenge/deliverybs/modalmarketing.module.scss";

interface MarketingModalProps {
  isOpen: boolean;
  closeModal: () => void;
  setMarketingCheck: (value: boolean) => void;
}

const ModalMarkgeting: React.FC<MarketingModalProps> = ({
  isOpen,
  closeModal,
  setMarketingCheck,
}) => {
  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    content: {
      left: "0",
      margin: "auto",
      width: "351px",
      height: "535px",
      padding: "0",
      overflow: "hidden",
    },
  };

  const handleConfirmClick = () => {
    setMarketingCheck(true);
    closeModal();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles}>
      {/* 모달 내용 */}
      <div>
        <div className={styles.modalHead}>
          <span>개인정보 제 3자 제공 및 활용 동의</span>
        </div>
        <div className={styles.modalBody}>
          <span className={styles.title}>
            개인정보 제 3자 제공 및 활용 동의서
          </span>
          <div className={styles.text}>
            펫누리(이하 '회사'라고 합니다)는 개인정보보호법 등 관련 법령상의
            개인정보보호 규정을 준수하며 귀하의 개인정보보호에 최선을 다하고
            있습니다. 회사는 개인정보보호법에 근거하여 다음과 같은 내용으로
            개인정보를 수집 및 처리하고자 합니다.
            <br />
            <br />
            다음의 내용을 자세히 읽어보시고 모든 내용을 이해하신 후에 동의
            여부를 결정해주시기 바랍니다.
          </div>
          <div className={styles.contents}>
            <div className={styles.lists}>
              제 1조(개인정보 수집 및 이용 목적)
            </div>
            <div className={styles.text}>
              <ul>
                <li>
                  챌린지에 참여 신청한 회원(이하 ‘신청자’) 제공한 모든 정보는
                  다음의 목적을 위해 활용하며, 목적 이외의 용도로는 사용되지
                  않습니다.
                </li>
                <ol>
                  <ul>
                    <li>1. 검진키트의 발송</li>
                    <li>2. 추후 포인트샵 이용시 구매한 상품의 발송</li>
                  </ul>
                </ol>
              </ul>
            </div>
          </div>
          <div className={styles.contents}>
            <div className={styles.lists}>
              제 2조(개인정보 수집 및 이용 목적)
            </div>
            <div className={styles.text}>
              <ul>
                <li>
                  펫누리는 개인정보 수집 목적을 위하여 다음과 같은 정보를
                  수집합니다.
                </li>
                <ol>
                  <ul>
                    <li>1. 성명, 주소 및 전화번호</li>
                  </ul>
                </ol>
              </ul>
            </div>
          </div>
          <div className={styles.contents}>
            <div className={styles.lists}>
              제 3조(개인정보 보유 및 이용 기간)
            </div>
            <div className={styles.text}>
              <ul>
                <li>
                  1. 수집한 개인정보는 수집·이용 동의일로부터 사용자에 의한 정보
                  삭제 및 회원 탈퇴 시 까지 보관 및 이용합니다.
                </li>
                <li>
                  2. 개인정보 보유기간의 경과, 처리 목적의 달성 등 개인정보가
                  불필요하게 되었을 때에는 지체없이 해당 개인정보를 파기합니다.
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.contents}>
            <div className={styles.lists}>제 4조(동의 거부 관리)</div>
            <div className={styles.text}>
              <ul>
                <li>
                  귀하는 본 안내에 따른 개인정보 수집·이용에 대하여 동의를
                  거부할 권리가 있습니다. 다만, 귀하가
                  <span className={styles.fontWeight}>
                    개인정보 동의를 거부하시는 경우에 천하제일 집사대회 참여
                    불가능 혹은 포인트샵 이용 불가능
                  </span>
                  의 불이익이 발생할 수 있음을 알려드립니다.
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.contents}>
            <div className={styles.lists}>제 5조(개인정보의 제3자 제공)</div>
            <div className={styles.text}>
              <ul>
                <li>
                  회사는 개인정보보호법에 근거하여 다음과 같은 내용으로
                  개인정보를 제3자에게 제공하고자 합니다.
                  <br />
                  <br />
                </li>
                <li>1. 개인정보를 제공 받는 제3자 : 택배업체</li>
                <li>
                  2. 개인정보 제공 목적 : 상품(이벤트 리워드, 체험용 제품,
                  포인트샵 구매 상품) 발송
                </li>
                <li>3. 개인정보 제공 항목 : 이름, 주소, 연락처</li>
                <li>
                  4. 개인정보 보유 및 이용기간 : 수집·이용 동의일로부터 사용자에
                  의한 정보 삭제 및 회원 탈퇴 시 까지
                </li>
                <li>
                  5. 개인정보 제공 거부 시 불이익 : 첨하제일 집사대회 참여
                  불가능 및 포인트샵 이용 불가능
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.contents}>
            <div className={styles.lists}>제 6조(개인정보의 처리 위탁)</div>
            <div className={styles.text}>
              <ul>
                <li>
                  회사가 취득한 개인정보는 정보통신망 이용촉진 및 정보보호 등에
                  관한 법률에 의하여 제3자에게 개인정보를
                  수집·보관·처리·이용·제공·관리·파기 등을 할 수 있도록 아래와
                  같이 개인정보처리 업무를 위탁합니다.
                  <br />
                  <br />
                </li>
                <li>1. 개인정보를 위탁 받는 자 : 택배업체</li>
                <li>2. 개인정보 위탁 업무 내용 : 상품 발송</li>
                <li>
                  <br />
                  <br />
                  본인은 위의 내용을 충분히 숙지하였으며, 위와 같이 개인정보처리
                  업무를 위탁하는데 동의합니다.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.modalBottom}>
          <button onClick={handleConfirmClick}>
            <span>동의합니다.</span>
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ModalMarkgeting;

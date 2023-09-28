import Modal from "react-modal";
import styles from "@/styles/challenge/deliverybs/modalrule.module.scss";

interface RuleModalProps {
  isOpen: boolean;
  closeModal: () => void;
  setRuleCheck: (value: boolean) => void;
}

const ModalRule: React.FC<RuleModalProps> = ({
  isOpen,
  closeModal,
  setRuleCheck,
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
    setRuleCheck(true);
    closeModal();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles}>
      {/* 모달 내용 */}
      <div>
        <div className={styles.modalHead}>
          <span>참가 규칙 및 유의사항</span>
        </div>
        <div className={styles.modalBody}>
          <div className={styles.contents}>
            <div className={styles.title}>참관규칙 유의사항</div>
            <div className={styles.text}>
              <ul>
                <li>
                  1. 본 약관은 펫누리가 운영하는 챌린지에서 제공하는 서비스(이하
                  '서비스'라 합니다)를 이용함에 있어 당사자의 권리 의무 및
                  책임사항을 규정하는 것을 목적으로 합니다. <br />
                </li>
                <li>
                  2. 본 챌린지는 ‘1 계정’ 당 ‘1 회’만 참여가 가능하며 소변검사
                  키트 또한 ‘1 세트’만 지급됩니다.
                </li>
                <li>
                  3. 본 챌린지는 참여 신청이 완료되면 참여 신청 시 입력한
                  배송정보를 변경할 수 없습니다.
                </li>
                <li>
                  4. 본 챌린지의 참여 신청 철회는 참여 신청 기간에만 가능합니다.
                </li>
                <ol>
                  <li>
                    5. 키트 수령 기간에 챌린지 참여 신청 철회를 원하는 경우
                    하단의 명시된 조건에 부합하는 사용자에 한하여 부분적으로
                    참여 신청 철회가 가능합니다.
                  </li>
                  <ul>
                    <li>a. 소변검사 키트의 발송이 시작되지 않은 회원</li>
                    <li>
                      b. 소변 검사 키트를 수령했지만 사용하지 않은 상태에서 키트
                      수령 기간내 반송이 가능한 회원
                    </li>
                    <li>
                      c. 주소지의 이전, 택배사의 오배송, 배송 중 파손 등의
                      사유로 인하여 인증글 작성 기간 내 정상적으로 소변검사
                      키트를 사용할 수 없게 된 회원
                    </li>
                  </ul>
                </ol>
                <li>6. 본 챌린지는 펫누리 회원만 참여가 가능합니다.</li>
                <li>
                  7. 참여 신청 기간, 키트 수령 기간에는 소변검사 키트 사용
                  후기를 작성할 수 없습니다.
                </li>
                <li>
                  8. 소변검사 키트를 수령한 후 정해진 기간안에 키트를 사용한 뒤
                  사용 후기를 작성하여야 참여가 완료됩니다.
                </li>
                <li>
                  9. 사용 후기 작성 시 사진과 15자 이상의 내용을 필수로
                  입력해야합니다.
                </li>
                <li>
                  10. 인증 기간 이후 사진 후기 작성자(참여 완료자)에 한해
                  순차적으로 리워드를 발송됩니다.
                </li>
                <li>
                  11. 작성한 사용 후기 글은 추후 펫누리의 소변검사 키트의 홍보
                  목적으로 이용될 수 있습니다.
                </li>
                <li>
                  12. 키트 수령 후 인증 기간 내 사용 후기 미 작성 시 추후 챌린지
                  참여와 포인트 지급에 불이익이 발생할 수 있습니다.
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.contents}>
            <div className={styles.title}>키트 이용 시 유의사항</div>
            <div className={styles.text}>
              <ul>
                <li>
                  1. 펫누리 비대면 소변검사 키트의 결과 내용은{" "}
                  <span className={styles.fontWeight}>반려동물의</span>{" "}
                  <span className={styles.red}>
                    질병을 ‘진단’ 하는것이 아닌
                  </span>{" "}
                  <span className={styles.fontWeight}>질병의</span>{" "}
                  <span className={styles.red}>발병 가능성을 ‘감지’</span>하는
                  제품입니다. <br />
                </li>
                <li>
                  2. 제품 겉면에 표기된 사용 방법을 숙지한 후 사용바랍니다.
                </li>
                <li>
                  3.{" "}
                  <span className={styles.fontWeight}>
                    강아지/고양이 모두 사용 가능한 제품
                  </span>
                  입니다.
                </li>
                <li>
                  4. 본 제품은 간이 검사 제품으로 확진 검사 제품이 아니며,
                  정확한 진단명과 발병 여부 확인을원하는 경우 별도의 동물병원
                  방문 진료가 필요합니다.
                </li>
                <li>
                  5. 본 제품과 서비스의 기능을 이용하여 확인이 가능한 검사
                  결과는 의료적 행위가 아님을 명시합니다.
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

export default ModalRule;

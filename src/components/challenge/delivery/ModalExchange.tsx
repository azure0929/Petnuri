import Modal from "react-modal";
import styles from "@/styles/challenge/deliverybs/modalexchange.module.scss";

interface ExchangeModalProps {
  isOpen: boolean;
  closeModal: () => void;
  setExchangeCheck: (value: boolean) => void;
}

const ModalExchange: React.FC<ExchangeModalProps> = ({
  isOpen,
  closeModal,
  setExchangeCheck,
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
    setExchangeCheck(true);
    closeModal();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles}>
      {/* 모달 내용 */}
      <div>
        <div className={styles.modalHead}>
          <span>교환 및 반품 정책</span>
        </div>
        <div className={styles.modalBody}>
          <div className={styles.title}>소변검사 키트의 반품 및 교환 정책</div>
          <div className={styles.red}>
            ‘천하제일 집사대회 : 검진키트편’ 챌린지에 참여 신청하여 ‘소변검사
            키트’ 와 추후 ‘리워드’를 지급 받은 회원들 중 다음 각 호의 조건에
            부합하는 경우 조건부로 교환과 반품이 가능합니다.
          </div>
          <div className={styles.container}>
            <div className={styles.title}>소변검사 키트의 교환</div>
            <div className={styles.contents}>
              <div className={styles.text}>
                <ul>
                  <li>
                    1. 배송 중 파손, 포장상태 불량, 제품 하자(구성품 누락, 초기
                    불량 등)
                    <ol>
                      <ul>
                        <li>
                          a. 구성품 누락, 제품의 하자, 초기 불량이 발생한 경우
                          이를 증명하는 이미지 혹은 동영상을 첨부하여 고객센터에
                          연락하여 사유가 증명된 경우
                        </li>
                        <li>
                          b. 택배비용을 착불, ‘펫누리’부담 으로 하여 ‘지정
                          장소’로 신청자가 택배 발송 혹은 하자 제품 폐기.
                        </li>
                        <li>
                          c. 하자 제품 폐기 혹은 파손 제품 회수 완료 시
                          펫누리에서 새검사 키트 제품을 재발송
                        </li>
                      </ul>
                    </ol>
                    <li>
                      <br />
                      상기 조건에 해당하는 경우 새제품을 발송하는데 필요한
                      비용은 펫누리가 부담합니다.
                    </li>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.container}>
            <div className={styles.title}>소변검사 키트의 반품</div>
            <div className={styles.contents}>
              <div className={styles.text}>
                <ul>
                  <li>
                    1. 단순 변심
                    <ol>
                      <ul>
                        <li>
                          a. 참여 신청 기간 이후 키트 수령 기간에 발송이 완료
                          되어 제품을 수령하였지만 챌린지 참여 신청을 철회하려는
                          경우
                        </li>
                        <li>
                          b. 제품이 발송된 상태 그대로 지정 장소로{" "}
                          <span className={styles.fontWeight}>
                            ‘신청자’가 택배 비용을 부담하여 발송
                          </span>
                        </li>
                        <li>
                          c. 반품 제품 검수 후
                          <span className={styles.fontWeight}>
                            제품의 상태가 초기 발송 당시와 상이하거나 재사용이
                            불가능하거나, 사용의 흔적이 있는 경우 반품이
                            거절되며 반송 비용은 수취인이 부담
                          </span>
                        </li>
                        <li>
                          d.{" "}
                          <span className={styles.fontWeight}>
                            반품이 거절된 경우 ‘챌린지 부당 참여’로 간주되어
                            이후 챌린지 참여 및 포인트 획득에 불이익 발생
                          </span>
                        </li>
                      </ul>
                    </ol>
                  </li>
                  <li>
                    2. 배송 중 파손, 포장 상태 불량, 제품 하자(구성품 누락, 초기
                    불량 등)
                    <ol>
                      <ul>
                        <li>
                          a. 수취 당시 파손된 상태, 포장 불량 상태, 제품의 하자
                          상태를 증명하는 이미지 혹은 동영상을 첨부하여
                          고객센터에 연락하여 사유가 증명된 경우
                        </li>
                        <li>
                          b.{" "}
                          <span className={styles.fontWeight}>
                            택배비용을 착불, ‘펫누리’부담 으로 하여 ‘지정
                            장소’로 신청자가 택배 발송 혹은 하자 제품 폐기.
                          </span>
                        </li>
                        <li>
                          c. 챌린지 참여 신청 철회 혹은 새제품 발송 요청을 선택
                        </li>
                        <li>
                          d.{" "}
                          <span className={styles.fontWeight}>
                            참여 신청 철회
                          </span>
                          의 경우 신청이 철회되어 인증 기간 내 사용 후기 글
                          작성을 하지 않아도
                          <span className={styles.fontWeight}>
                            챌린지 부당 참여로 간주되지 않음
                          </span>
                        </li>
                        <li>
                          e. 새제품 발송을 선택한 경우 소변검사키트의{" "}
                          <span className={styles.fontWeight}>
                            새제품이 발송
                          </span>
                          됨
                          <span className={styles.fontWeight}>
                            인증 기간 내 사용후기글을 작성해야하며, 미작성시
                            챌린지 부당 참여로 간주되어 불이익 발생
                          </span>
                        </li>
                      </ul>
                    </ol>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.container}>
            <div className={styles.title}>소변검사 키트의 반품</div>
            <div className={styles.contents}>
              <div className={styles.text}>
                <ul>
                  <li>
                    1. 단순 변심
                    <ol>
                      <ul>
                        <li>
                          a. 단순 변심으로 인하여 리워드 교환을 신청하여도
                          정해진 댕댕이세트/냥냥이세트 외에 다른 보상으로의
                          교환이 불가합니다.
                        </li>
                        <li>
                          b. 구성품 중 특정제품과 구성품 내 타제품으로의 교환이
                          불가합니다(구성품 A,B,C,D 중 B와 D를 C로 교환하여
                          A,C,C,C 수령 등)
                        </li>
                      </ul>
                    </ol>
                  </li>
                  <li>
                    2. 제품의 하자
                    <ol>
                      <ul>
                        <li>
                          a. 리워드의 구성품 중 일부에 하자가 발생하였거나, 초기
                          불량이 발견된 경우 해당 제품의 공급사의 규정에 따라
                          교환 처리됩니다.
                        </li>
                        <li>
                          b.교환이 불가능한 경우 제휴사와 ‘펫누리’와의 협의를
                          통해 적절한 보상을 제공합니다.
                        </li>
                        <li>
                          c. 하자 혹은 초기 불량제품의 일부를 포인트 지급으로
                          대체할 수 없습니다.
                        </li>
                      </ul>
                    </ol>
                  </li>
                  <li>
                    3. 리워드 현품을 포인트로의 교환 혹은 대체지급
                    <ol>
                      <ul>
                        <li>
                          a. 현품으로 지급된 리워드를 펫누리 내의 포인트로 대체
                          지급하는것은 불가능합니다.
                        </li>
                      </ul>
                    </ol>
                  </li>
                </ul>
              </div>
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

export default ModalExchange;

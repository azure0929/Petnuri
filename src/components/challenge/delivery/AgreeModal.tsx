import Modal from "react-modal";
import styles from "@/styles/challenge/deliverybs/agreemodal.module.scss";

interface AgreeModalProps {
  isOpen: boolean;
  closeModal: () => void;
  setAllCheck: (value: boolean) => void;
}

const AgreeModal: React.FC<AgreeModalProps> = ({
  isOpen,
  closeModal,
  setAllCheck,
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
    setAllCheck(true);

    closeModal();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles}>
      {/* 모달 내용 */}
      <div>
        <div className={styles.modalHead}>
          <span>약관 동의</span>
        </div>
        <div className={styles.text}>텍스트</div>
        <div className={styles.modalBottom}>
          <button onClick={handleConfirmClick}>
            <span>전체 동의</span>
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default AgreeModal;

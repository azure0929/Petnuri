import { ReactNode, useEffect, useState } from "react";
import styles from "@/styles/challenge/deliverybs/deliverybslayout.module.scss";
import { useRecoilState, useSetRecoilState } from "recoil";
import { bottomSheetState, BSTypeState } from "@/store/challengeState";

interface BottomSheetProps {
  children: ReactNode;
  height?: number;
}

const BottomSheet: React.FC<BottomSheetProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useRecoilState(bottomSheetState);
  const setBSType = useSetRecoilState(BSTypeState)
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    setBSType('DeliveryBS')
  }

  return (
    <>
      {isOpen && (
        <>
          <div
            className={`${styles.background} ${
              isVisible ? styles.visible : ""
            }`}
            onClick={handleClose}
          ></div>
          <div
            className={`${styles.container} ${isVisible ? styles.visible : ""}`}
          >
            {children}
          </div>
        </>
      )}
    </>
  );
};

export default BottomSheet;

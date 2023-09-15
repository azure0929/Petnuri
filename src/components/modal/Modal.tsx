import { ReactNode, useEffect, useState } from "react";
import styles from '@/styles/modal.module.scss'
import { useRecoilState } from 'recoil'
import { bottomSheetState } from "@/store/challengeState";

interface BottomSheetProps {
  children: ReactNode;
  height?: number; 
}

const Modal: React.FC<BottomSheetProps> = ({ children, height='204' }) => {
  const [isOpen, setIsOpen] = useRecoilState(bottomSheetState);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [isOpen]);

  return (
    <>
      {isOpen && (
      <>
        <div className={styles.box}>
          <div className={`${styles.background} ${isVisible ? styles.visible : ''}`} onClick={() => setIsOpen(false)}></div>
          <div className={styles.wrapper}>
            <div className={`${styles.container} ${isVisible ? styles.visible : ''}`}
            style={{height:`${height}px`}}>
                {children}
            </div>
          </div>
        </div>
      </>
      )}
    </>
  );
};

export default Modal;

import { ReactNode, useEffect, useState } from "react";
import styles from '@/styles/bottomsheet.module.scss'
import { useRecoilState } from 'recoil'
import { bottomSheetState } from "@/store/challengeState";

interface BottomSheetProps {
  children: ReactNode;
  height?: number; 
}

const BottomSheet: React.FC<BottomSheetProps> = ({ children, height = 60 }) => {
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
          <div
            className={`${styles.background} ${isVisible ? styles.visible : ''}`}
            onClick={() => setIsOpen(false)}
          ></div>
          <div 
            className={`${styles.container} ${isVisible ? styles.visible : ''}`} 
            style={{ height: `${height}vh` }}
          >
            {children}
          </div>
        </>
      )}
    </>
  );
};

export default BottomSheet;

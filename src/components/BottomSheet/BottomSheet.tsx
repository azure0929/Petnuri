import { ReactNode } from "react";
import styles from '@/styles/bottomsheet.module.scss'
import { useRecoilState } from 'recoil'
import { bottomSheetState } from "@/store";

interface BottomSheetProps {
  children: ReactNode;
}

const BottomSheet: React.FC<BottomSheetProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useRecoilState(bottomSheetState);

   return (
     <>
        {isOpen && (
          <>
            <div className={styles.background} onClick={() => setIsOpen(false)}></div>
            <div className={`${styles.container} ${isOpen ? styles.active : ''}`}>
              {children}
            </div>
          </>
        )}
     </>
   );
};

export default BottomSheet
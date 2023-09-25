import { ReactNode } from "react";
import styles from '@/styles/modal.module.scss'
import { useRecoilState } from 'recoil'
import { kitModalState, loginModalState } from "@/store/challengeState";

interface BottomSheetProps {
  children: ReactNode;
  height?: number; 
  modalType: string
}

const Modal: React.FC<BottomSheetProps> = ({ 
  children, 
  height='204', 
  modalType 
}) => {
  const [isLoginOpen, setLoginOpen] = useRecoilState(loginModalState);
  const [isKitOpen, setKitOpen] = useRecoilState(kitModalState);

  let isOpen;
   
  if (modalType === "login") {
    isOpen = isLoginOpen;
  } else if (modalType === "kit") {
    isOpen = isKitOpen;
  }

  const closeModal = () => {
   if (modalType === "login") {
     setLoginOpen(false);
   } else if (modalType === "kit") {
     setKitOpen(false);
   }
  };

  return (
    <>
      {isOpen && (
        <>

          <div className={styles.wrapper}>
            <div className={styles.container}
            style={{height:`${height}px` }}>
                {children}
            </div>
            <div className={styles.background} onClick={closeModal}></div>
          </div>
        </>
      )}
    </>
  );
};

export default Modal;

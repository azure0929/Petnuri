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
  const [sheetHeight, setSheetHeight] = useState(height);
  const minBottomSheetHeight = 1;
  const maxBottomSheetHeight = 95;

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      setSheetHeight(height);
    } else {
      setIsVisible(false);
    }
  }, [isOpen, height]);

  const handleDragStart = (e:any) => {
    e.preventDefault();
    let initialY;
    if(e.type === 'touchstart') initialY = e.touches[0].clientY;
    else initialY = e.clientY;

    const currentHeight = sheetHeight;

    const moveHandler = handleDrag(initialY, currentHeight);
    const endHandler = () => handleDragEnd(moveHandler);

    window.addEventListener('mousemove', moveHandler);
    window.addEventListener('mouseup', endHandler);
    
    window.addEventListener('touchmove', moveHandler);
    window.addEventListener('touchend', endHandler);
  };

  const handleDragEnd= (handler:any) => {
    window.removeEventListener('mousemove', handler);
    window.removeEventListener('mouseup', handler);
    window.removeEventListener('touchmove', handler);
    window.removeEventListener('touchend',handler );
  };

  const handleDrag= (initialPosition:any, initialHeight:any)=>(e:any)=>{
    let currentPosition;
    if(e.type === 'touchmove') currentPosition=e.touches[0].clientY;
    else currentPosition=e.clientY;
    let newHeight= initialHeight + (initialPosition-currentPosition)/window.innerHeight*100; 
    newHeight=Math.max(Math.min(newHeight,maxBottomSheetHeight),minBottomSheetHeight);
    setSheetHeight(newHeight);
  }

  return (
    <>
      {isOpen && (
        <>
          <div
            className={`${styles.background} ${isVisible ? styles.visible : ''}`}
            onClick={() => setIsOpen(false)}
          ></div>
          <div className={styles.wrapper}>
            <div 
              className={`${styles.container} ${isVisible ? styles.visible : ''}`} 
              style={{ height: `${sheetHeight}vh` }}
            >
              <div 
                className={styles.handler} 
                onMouseDown={handleDragStart}
                onTouchStart={handleDragStart}
              ></div>
              {children}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default BottomSheet;

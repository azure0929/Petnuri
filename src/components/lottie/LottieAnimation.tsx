import React, { useEffect, useRef } from 'react';
import lottie, { AnimationItem } from 'lottie-web';
import animationData from '@/components/lottie/dog.json';
import styles from "@/styles/registsuccess.module.scss";

const LottieAnimation: React.FC = () => {
  const animationContainerRef = useRef<HTMLDivElement | null>(null);
  const animationRef = useRef<AnimationItem | null>(null);

  useEffect(() => {
    if (animationContainerRef.current) {
      animationRef.current = lottie.loadAnimation({
        container: animationContainerRef.current,
        animationData: animationData, 
        loop: true, 
        autoplay: true, 
      });
    }

    return () => {
      if (animationRef.current) {
        animationRef.current.destroy();
      }
    };
  }, []);

  return (
    <div ref={animationContainerRef} className={styles.lottie}>
    </div>
  );
};

export default LottieAnimation;

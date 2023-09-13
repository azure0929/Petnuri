import styles from '@/styles/head.module.scss'
import { ReactNode } from 'react';

interface BackgroundProps {
  children: ReactNode;
}

const Head: React.FC<BackgroundProps> = ({ children }) => {

  return (
    <div className={styles.container}>
      {children}
    </div>
  );
};

export default Head
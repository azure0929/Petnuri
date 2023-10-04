import styles from "@/styles/head.module.scss";
import { ReactNode, CSSProperties } from "react";

interface BackgroundProps {
  children: ReactNode;
  style?: CSSProperties;
}

const Head: React.FC<BackgroundProps> = ({ children, style }) => {
  return (
    <div className={styles.container} style={style}>
      {children}
    </div>
  );
};

export default Head;

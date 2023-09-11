import MainTab from "@/components/MainTab";
import Background from "@/components/Background";
import styles from "@/styles/pettalk.module.scss";
import { Link, useLocation } from "react-router-dom";

const Concern = () => {
  const location = useLocation();
  return (
    <>
      <Background>
        <div className={styles.headTab}>
          <Link
            to="/petTalk"
            className={`${styles.head_item} ${
              location.pathname === "/petTalk" ? styles.active : ""
            }`}
          >
            전체
          </Link>
          <Link
            to="/concern"
            className={`${styles.head_item} ${
              location.pathname === "/concern" ? styles.active : ""
            }`}
          >
            고민상담
          </Link>
          <Link
            to="/freetalk"
            className={`${styles.head_item} ${
              location.pathname === "/freetalk" ? styles.active : ""
            }`}
          >
            자유수다
          </Link>
        </div>
      </Background>
      <MainTab />
    </>
  );
};
export default Concern;

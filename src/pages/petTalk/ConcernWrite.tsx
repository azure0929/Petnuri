import Background from "@/components/Background";
import PettalkWrite from "@/components/PettalkWrite";
import styles from "@/styles/concernwrite.module.scss";
import { useState } from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { useNavigate, useLocation } from "react-router-dom";
import Head from "@/components/Head";

const ConcernWrite = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [active, setActive] = useState(true);

  const onClickBack = () => {
    navigate(-1);
  };

  const isFreeTalkWrite = location.pathname === "/petTalk/freetalkwrite";

  return (
    <Background>
      <div className={styles.contain}>
        <Head
          style={{ height: "100px", display: "flex", flexDirection: "column" }}
        >
          <div className={styles.header}>
            <AiOutlineLeft className={styles.icon} onClick={onClickBack} />
            고민상담
          </div>

          <div className={styles.tab}>
            {active ? (
              <>
                <div
                  className={styles.active}
                  onClick={() => setActive(true)}
                  data-pet-type="DOG"
                >
                  강아지
                </div>
                <div
                  className={styles.unactive}
                  onClick={() => setActive(false)}
                  data-pet-type="CAT"
                >
                  고양이
                </div>
              </>
            ) : (
              <>
                <div
                  className={styles.unactive}
                  onClick={() => setActive(true)}
                  data-pet-type="DOG"
                >
                  강아지
                </div>
                <div
                  className={styles.active}
                  onClick={() => setActive(false)}
                  data-pet-type="CAT"
                >
                  고양이
                </div>
              </>
            )}
          </div>
        </Head>
        <PettalkWrite
          isFreeTalkWrite={isFreeTalkWrite}
          petType={active ? "DOG" : "CAT"}
        />
      </div>
    </Background>
  );
};

export default ConcernWrite;

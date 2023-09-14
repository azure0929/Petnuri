import Background from '@/components/Background';
import PettalkWrite from '@/components/PettalkWrite';
import styles from '@/styles/concernwrite.module.scss';
import { useState } from 'react';
import { AiOutlineLeft } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const ConcernWrite = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState(true);
  const onClickBack = () => {
    navigate(-1);
  };
  return (
    <Background>
      <div className={styles.contain}>
        <div className={styles.header}>
          <AiOutlineLeft
            className={styles.icon}
            onClick={onClickBack}
          />
          고민상담
        </div>
        <div className={styles.tab}>
          {active ? (
            <>
              <div
                className={styles.active}
                onClick={() => setActive(true)}
              >
                강아지
              </div>
              <div
                className={styles.unactive}
                onClick={() => setActive(false)}
              >
                고양이
              </div>
            </>
          ) : (
            <>
              <div
                className={styles.unactive}
                onClick={() => setActive(true)}
              >
                강아지
              </div>
              <div
                className={styles.active}
                onClick={() => setActive(false)}
              >
                고양이
              </div>
            </>
          )}
        </div>
        <PettalkWrite />
      </div>
    </Background>
  );
};

export default ConcernWrite;

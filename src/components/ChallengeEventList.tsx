import React from 'react';
import styles from '@/styles/challengeeventlist.module.scss';
import { useNavigate } from 'react-router-dom';

const ChallengeEventList: React.FC<ChallengeEventListProps> = ({ item, path }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.section} onClick={() => navigate(path)}>
      <img src={item?.thumbnail} alt="" className={styles.img}/>
      <div className={styles.text}>
        <div className={styles.title}> {item?.title} </div>
        <div className={styles.subtitle}>{item?.subTitle}</div>
      </div>
    </div>
  );
};

export default ChallengeEventList;

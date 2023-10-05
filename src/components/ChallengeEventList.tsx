import React from 'react';
import styles from '@/styles/challengeeventlist.module.scss';
import { useNavigate } from 'react-router-dom';

const ChallengeEventList: React.FC<ChallengeEventListProps> = ({ item, path }) => {
  const navigate = useNavigate();

  const displayTitle = item?.title && item.title.length > 10 
    ? `${item.title.substring(item.title.length - 10)}` 
    : item?.title;

  return (
    <div className={styles.section} onClick={() => navigate(path)}>
      <img src={item?.thumbnail} alt="" className={styles.img}/>
      <div className={styles.text}>
        <div className={styles.title}> {displayTitle} </div>
        <div className={styles.subtitle}>{item?.subTitle}</div>
      </div>
    </div>
  );
};

export default ChallengeEventList;

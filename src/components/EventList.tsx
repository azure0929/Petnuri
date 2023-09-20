import styles from '@/styles/eventlist.module.scss'

const EventList: React.FC<HomeEventListProps> = ({ item, onClick }) => {
  return (
    <li className={styles.list} onClick={onClick}>
      <img src={item?.thumbnail} alt="" className={styles.photo}/>
      <div className={styles.desc}>
        <span className={styles.span}>{item?.name}</span>
        <p className={styles.p}>{item?.subName || item?.challengeReview}</p>
      </div>
    </li>
  );
};

export default EventList
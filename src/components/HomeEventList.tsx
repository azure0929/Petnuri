import styles from '@/styles/homeeventlist.module.scss'

const HomeEventList = ({ item, onClick }:HomeEventListProps) => {
  return (
    <li className={styles.list} onClick={onClick}>
      <img src={item?.thumbnail} alt="" className={styles.photo}/>
      <div className={styles.desc}>
        <span className={styles.span}>{item?.title}</span>
        <p className={styles.p}>{item?.subTitle}</p>
      </div>
    </li>
  );
};

export default HomeEventList
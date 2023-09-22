import styles from '@/styles/fulladress.module.scss'
import EditBtn from './EditBtn'

interface FullAdressProps {
  item:Privacy
  isSelected: boolean;
  onSelect: () => void;
}

const FullAdress = ({item, isSelected, onSelect}: FullAdressProps) => {

  return (
    <>
      <div className={`${styles.head} ${isSelected ? styles.active : ''}`}>
        {isSelected ? '기본 배송지' : '기타 배송지'}
      </div>

      <div className={styles.body}>
        <div className={styles.box1}>
          <div>{item.name}</div>
          <span>|</span>
          <div>{item.phone}</div>
        </div>

        <div className={styles.box2}>
          <div>{item.add1}</div>
          <div>{item.add2}</div>
          <div>{item.zonecode}</div>
        </div>

        <div className={styles.box3}>
          <EditBtn version='light' text='수정'/>
          <button onClick={onSelect}>
              <EditBtn version='dark' text='선택'/>
          </button>
        </div>
      </div>
    </>
  )
}

export default FullAdress
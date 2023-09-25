import styles from '@/styles/fulladress.module.scss'
import EditBtn from './EditBtn'
import close from '@/assets/close.svg'
import { useSetRecoilState } from 'recoil';
import { deliveryDataState, BSTypeState } from '@/store/challengeState';

interface FullAdressProps {
  item:Privacy
  isSelected: boolean;
  onSelect: () => void;
}

const FullAdress = ({item, isSelected, onSelect }: FullAdressProps) => {
  const setDeliveryData = useSetRecoilState(deliveryDataState);
  const setBSType = useSetRecoilState(BSTypeState);

  const handleEdit = () => {
    setDeliveryData({
      name: item.name,
      phone: item.phone,
      address1: item.add1,
      address2: item.add2,
      zonecode:item.zonecode,
      isSelected:item.default
     });
    setBSType('DeliveryReg')
  };

  return (
    <>
      <div className={`${styles.head} ${isSelected ? styles.active : ''}`}>
        {isSelected ? '기본 배송지' : '기타 배송지'}
      </div>

      <div className={styles.body}>
        <div className={styles.box1}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div>{item.name}</div>
            <span>|</span>
            <div>{item.phone}</div>
          </div>
          <img src={close} alt="" />
        </div>

        <div className={styles.box2}>
          <div>{item.add1}</div>
          <div>{item.add2}</div>
          <div>{item.zonecode}</div>
        </div>

        <div className={styles.box3}>
          <EditBtn version='light' text='수정' onClick={handleEdit}/>
          <button onClick={onSelect}>
              <EditBtn version='dark' text='선택'/>
          </button>
        </div>
      </div>
    </>
  )
}

export default FullAdress
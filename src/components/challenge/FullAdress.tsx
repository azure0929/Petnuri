import styles from '@/styles/fulladress.module.scss'
import EditBtn from './EditBtn'
import close from '@/assets/close.svg'
import { useSetRecoilState } from 'recoil';
import { deliveryDataState, BSTypeState } from '@/store/challengeState';

interface FullAdressProps {
  item:Privacy
  isSelected: boolean;
  onSelect: () => void;
  onDelete: () => void;
  onUpdate: () => void;
}

const FullAdress = ({item, isSelected, onSelect, onDelete, onUpdate }: FullAdressProps) => {
  const setDeliveryData = useSetRecoilState(deliveryDataState);
  const setBSType = useSetRecoilState(BSTypeState);

  const handleEdit = () => {
    setDeliveryData({
      name: item.name,
      phone: item.phone,
      roadAddress: item.roadAddress,
      address: item.address,
      zipCode:item.zipcode,
      isSelected:item.isBased
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
          <img src={close} alt="" onClick={onDelete}/>
        </div>

        <div className={styles.box2}>
          <div>{item.roadAddress}</div>
          <div>{item.address}</div>
          <div>{item.zipcode}</div>
        </div>

        <div className={styles.box3}>
          <EditBtn version='light' text='수정' onClick={handleEdit}/>
          <button onClick={onSelect}>
              <EditBtn version='dark' text='선택' onClick={onUpdate}/>
          </button>
        </div>
      </div>
    </>
  )
}

export default FullAdress
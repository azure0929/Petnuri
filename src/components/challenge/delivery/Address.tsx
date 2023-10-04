import styles from "@/styles/challenge/deliverybs/address.module.scss";
import { useSetRecoilState } from "recoil";
import { BSTypeState } from "@/store/challengeState";

interface AddressProps {
  addressData: DefaultAddressArray;
}

const Address: React.FC<AddressProps> = ({ addressData }) => {
  const setBSType = useSetRecoilState(BSTypeState);

  const handleReg = () => {
    setBSType("DeliveryReg");
  };

  const handleList = () => {
    setBSType("DeliveryList");
  };

  return (
    <>
      <div className={styles.container}>
        {addressData && addressData.length > 0 ? (
          <>
            <div className={styles.title}>배송 정보</div>
            {addressData.map((addressItem, index) => (
              <div key={index} className={styles.infoContainer}>
                <div className={styles.userInfo}>
                  <div className={styles.name}>{addressItem.name}</div>
                  <div className={styles.border}>|</div>
                  <div className={styles.phone}>{addressItem.phone}</div>
                </div>
                <div className={styles.addressContainer}>
                  <div className={styles.address}>{addressItem.roadAddress}</div>
                  <div className={styles.detailAddress}>{addressItem.address}</div>
                  <div className={styles.zoneCode}>({addressItem.zipcode})</div>
                </div>
                <div className={styles.btn}>
                  <button className={styles.updateBtn} onClick={handleList}>수정</button>
                </div>
              </div>
            ))}
          </>
        ) : (
          <>
            <div className={styles.noAddressContainer}>
              <div className={styles.title}>배송 정보</div>
              <div className={styles.addressList} onClick={handleList}>
                배송지 목록
              </div>
            </div>
            <button className={styles.registBtn} onClick={handleReg}>
              배송지 등록
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default Address;

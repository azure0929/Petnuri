import MainTab from '../../components/MainTab';
import Background from '../../components/Background';
import styles from '@/styles/mypage.module.scss';

const MyPage = () => {
  return (
    <>
      <Background>
        <div className={styles.head}>
          <p>마이페이지</p>
        </div>
        <div className={styles.info}>
          <div className={styles.photo}></div>
        </div>
      </Background>
      <MainTab />
    </>
  );
};
export default MyPage;

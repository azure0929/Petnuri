import Modal from './Modal'
import styles from '@/styles/loginmodal.module.scss'
import { useSetRecoilState } from 'recoil';
import { loginModalState } from "@/store/challengeState";
import { Link } from 'react-router-dom';

const LoginModal = () => {
  const setIsOpen = useSetRecoilState(loginModalState); 

  const handleClose = () => {
    setIsOpen(false);
  }

  return (
    <>
      <Modal modalType='login'>
        <p className={styles.title}>로그인이 필요한 서비스입니다.</p>
        <p className={styles.sub}>로그인 하시겠습니까?</p>
        <div className={styles.button}>
          <button onClick={handleClose} className={styles.cancle}> 취소 </button>
          <Link to='/login' className={styles.confirm}>
            <button onClick={handleClose} className={styles.confirm}> 확인 </button>
          </Link>
        </div>
      </Modal>
    </>
  );
};

export default LoginModal
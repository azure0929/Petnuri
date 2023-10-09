import { AiOutlineLeft } from 'react-icons/ai';
import styles from '@/styles/editinfo.module.scss';
import Warning from '@/assets/Warning.png';
import nonCheck from '@/assets/none-checked.png';
import Checked from '@/assets/checked.png';

interface WithdrawModalProps {
  check: boolean;
  setCheck: (value: boolean) => void;
  setModal: (value: boolean) => void;
  onClickWithdraw: () => void;
}

const WithdrawModal = ({check, setCheck, setModal, onClickWithdraw}: WithdrawModalProps) => {
  return (
    <div className={styles.modalcontain}>
      <div className={styles.header}>
        <AiOutlineLeft
          className={styles.modalicon}
          onClick={() => setModal(false)}
        />
        회원 탈퇴
      </div>
      <div className={styles.warningarea}>
        <div className={styles.warning}>
          <img
            src={Warning}
            alt="warning icon"
          />
          <div className={styles.warningtitle}>
            정말 탈퇴하시겠습니까?
          </div>
          <div className={styles.warningsubtitle}>
            회원 탈퇴 시 고객님의 모든 정보가 소멸되며 <br />
            이전으로 복구가 불가능합니다
          </div>
        </div>
        <div
          className={styles.check}
          onClick={() => setCheck(!check)}
        >
          <img src={check ? Checked : nonCheck} />
          <label htmlFor="btn1">
            안내사항을 모두 확인하였으며 동의합니다
          </label>
        </div>
      </div>
      <div className={styles.btnarea}>
        <button
          disabled={!check}
          onClick={onClickWithdraw}
        >
          회원 탈퇴
        </button>
      </div>
    </div>
  )
}

export default WithdrawModal
import Background from '@/components/Background';
import styles from '@/styles/editinfo.module.scss';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { IoIosAdd } from 'react-icons/io';

const EditInfo = () => {
  const navigate = useNavigate();
  const onClickBack = () => {
    navigate(-1);
  };
  return (
    <Background>
      <div className={styles.contain}>
        <div className={styles.header}>
          <AiOutlineLeft
            className={styles.icon}
            onClick={onClickBack}
          />
          프로필 수정
        </div>
        <div className={styles.info}>
          <div className={styles.photoarea}>
            <div className={styles.photo}>
              <div className={styles.plusbtn}>
                <IoIosAdd />
              </div>
            </div>
          </div>
          <div className={styles.nickarea}>
            <p className={styles.nickname}>여덟글자까지가능</p>
            <p className={styles.email}>Yu-jin@kakao.com</p>
          </div>
        </div>
        <div className={styles.contents}>
          <div className={styles.nickinputarea}>
            닉네임
            <div className={styles.nickinput}>
              <input placeholder="수정을 원하실 경우 입력해주세요" />
              <button>중복체크</button>
            </div>
          </div>
          <div className={styles.numinputarea}>
            휴대폰번호
            <div className={styles.numinput}>
              <input placeholder="010-0000-0000" />
            </div>
          </div>
        </div>
        <div className={styles.exit}>
          회원 탈퇴
          <AiOutlineRight />
        </div>
        <div className={styles.editbtnarea}>
          <button>수정 완료</button>
        </div>
      </div>
    </Background>
  );
};
export default EditInfo;

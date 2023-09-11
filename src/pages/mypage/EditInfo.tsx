import Background from '@/components/Background';
import styles from '@/styles/editinfo.module.scss';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

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
        <div className={styles.contents}>
          <div>
            닉네임
            <input placeholder="꿍이집" />
          </div>
          <div>
            휴대폰번호
            <input placeholder="010-0000-0000" />
          </div>
        </div>
        <div className={styles.exit}>
          회원 탈퇴
          <AiOutlineRight />
        </div>
      </div>
    </Background>
  );
};
export default EditInfo;

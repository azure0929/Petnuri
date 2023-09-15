import Background from '@/components/Background';
import styles from '@/styles/editinfo.module.scss';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { IoIosAdd } from 'react-icons/io';
import { useState } from 'react';
import Warning from '../../assets/Warning.png';

const EditInfo = () => {
  const [modal, setModal] = useState(false);
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
        <div
          className={styles.exit}
          onClick={() => setModal(true)}
        >
          회원 탈퇴
          <AiOutlineRight />
        </div>
        <div className={styles.editbtnarea}>
          <button>수정 완료</button>
        </div>

        {modal === true ? (
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
              <div></div>
            </div>
            <div className={styles.btnarea}>
              <button>회원 탈퇴</button>
            </div>
          </div>
        ) : null}
      </div>
    </Background>
  );
};
export default EditInfo;

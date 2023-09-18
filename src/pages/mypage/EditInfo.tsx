import Background from '@/components/Background';
import styles from '@/styles/editinfo.module.scss';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { IoIosAdd } from 'react-icons/io';
import { useState } from 'react';
import Warning from '../../assets/Warning.png';
import nonCheck from '@/assets/none-checked.png';
import Checked from '@/assets/checked.png';

const EditInfo = () => {
  const [modal, setModal] = useState(false);
  const [filemodal, setFilemodal] = useState(false);
  const [input, setInput] = useState('');
  const [validation, setValidation] = useState(false);
  const [check, setCheck] = useState(false);
  const navigate = useNavigate();
  const onClickBack = () => {
    navigate(-1);
  };

  const changeHandler = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setInput(target.value);
    // 정규 표현식 패턴
    var pattern = /^[a-zA-Z가-힣]+$/;

    // 입력값을 패턴과 비교하여 유효성을 검사
    if (
      pattern.test(target.value) &&
      target.value.length >= 2 &&
      target.value.length <= 10
    ) {
      console.log('입력값이 유효합니다.');
      setValidation(true);
    } else {
      console.log('입력값이 유효하지 않습니다.');
      setValidation(false);
    }
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
                <IoIosAdd onClick={() => setFilemodal(true)} />
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
            <div
              className={styles.nickinput}
              style={
                validation || input.length == 0
                  ? { border: 'none' }
                  : { border: '1px solid #f42a3b' }
              }
            >
              <input
                placeholder="수정을 원하실 경우 입력해주세요"
                value={input}
                onChange={changeHandler}
                style={
                  validation || input.length == 0
                    ? { color: '#000000' }
                    : { color: '#f42a3b' }
                }
              />
              <button
                style={
                  validation
                    ? {
                        color: '#ffffff',
                        backgroundColor: '#3f54d1',
                        cursor: 'pointer',
                      }
                    : {
                        color: '#3f54d1',
                        backgroundColor: 'rgba(63, 84, 209, 0.1)',
                      }
                }
              >
                중복체크
              </button>
            </div>
            <span
              style={
                validation || input.length == 0
                  ? { color: '#ffffff' }
                  : { color: '#f42a3b' }
              }
            >
              숫자, 특수문자, 공백 제외 최소 2자~10자까지 입력
            </span>
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
              <div
                className={styles.check}
                onClick={() => setCheck((old) => !old)}
              >
                <img src={check ? Checked : nonCheck} />
                <label htmlFor="btn1">
                  안내사항을 모두 확인하였으며 동의합니다
                </label>
              </div>
            </div>
            <div className={styles.btnarea}>
              <button disabled={!check}>회원 탈퇴</button>
            </div>
          </div>
        ) : null}
        {filemodal ? (
          <div className={styles.filemodalcontain}>
            <div className={styles.filebtns}>
              <div className={styles.choosefilebtns}>
                <label htmlFor="file">
                  <div className={styles.upload}>사진 선택하기</div>
                </label>
                <input
                  type="file"
                  name="file"
                  id="file"
                  style={{ display: 'none' }}
                />
                <button>기본 이미지로 변경</button>
              </div>
              <div className={styles.exitbtn}>
                <button onClick={() => setFilemodal(false)}>취소</button>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </Background>
  );
};
export default EditInfo;

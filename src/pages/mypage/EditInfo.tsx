import Background from '@/components/Background';
import styles from '@/styles/editinfo.module.scss';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { IoIosAdd } from 'react-icons/io';
import { useEffect, useState } from 'react';
import Warning from '../../assets/Warning.png';
import nonCheck from '@/assets/none-checked.png';
import Checked from '@/assets/checked.png';
import {
  editProfile,
  getMypage,
  nickCheck,
  withdraw,
} from '@/lib/apis/mypageApi';
import defaultImage from '@/assets/defaultImage.png';

const EditInfo = () => {
  const [modal, setModal] = useState(false);
  const [filemodal, setFilemodal] = useState(false);
  const [input, setInput] = useState('');
  const [validation, setValidation] = useState(false);
  const [check, setCheck] = useState(false);
  const [img, setImg] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState();
  const [file, setFile] = useState<File>();
  const [doubleCheck, setDoubleCheck] = useState(false);
  const [message, setMessage] = useState('')

  const convertURLtoFile = async (url: string) => {
    const response = await fetch(url);
    const data = await response.blob();
    const ext = url.split('.').pop();
    const filename = url.split('/').pop(); 
    const metadata = { type: `image/${ext}` };
    return new File([data], filename!, metadata);
  };

  const navigate = useNavigate();
  const onClickBack = () => {
    navigate(-1);
  };

  const onClickCheck = async () => {
    if (!validation) return;
    
    try {
      let res = await nickCheck(input)
      if (!res?.data.isExists) {
        setMessage('사용 가능합니다.');
        setDoubleCheck(true);
      } else if (res?.data.isExists) {
        setMessage('다른 닉네임을 사용해주세요.');
        setDoubleCheck(false);
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  useEffect(() => {
    const a = getMypage();
    a.then((res) => {
      console.log('res::', res);
      setNickname(res.nickname);
      setEmail(res.email);
      setImg(res.profileImageUrl);
    });
    console.log('---', a);
  }, []);

  const onClickEdit = () => {
    if (doubleCheck || input == '') {
      let temp = input;
      if (input == '') {
        temp = nickname;
      }
      editProfile(temp, file).then(() => {
        navigate('/mypage');
      });
    }
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => { // input event type
    setInput(e.target.value);

    const pattern = /^[a-zA-Z가-힣]+$/;

    if (
      pattern.test(e.target.value) &&
      e.target.value.length >= 2 &&
      e.target.value.length <= 10
    ) {
      setValidation(true);
      setMessage('');
    } else {
      setValidation(false);
      setMessage('숫자,특수문자,공백 제외 최소 2자~10자까지 입력');
    }
    
    if(doubleCheck){
       setDoubleCheck(false); 
       setMessage('');
     }
   };

  const onClickWithdraw = () => {
    withdraw();
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
            <div
              className={styles.photo}
              style={{
                backgroundImage: `url(${img ? img : defaultImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className={styles.plusbtn}>
                <IoIosAdd onClick={() => setFilemodal(true)} />
              </div>
            </div>
          </div>
          <div className={styles.nickarea}>
            <p className={styles.nickname}>{nickname}</p>
            <p className={styles.email}>{email}</p>
          </div>
        </div>
        <div className={styles.contents}>
         <div className={styles.nickinputarea}>
            닉네임
            <div className={`${styles.nickinput} ${validation || input.length ==0 ? styles.validationBorder : styles.errorBorder}`}>
              <input
                placeholder="수정을 원하실 경우 입력해주세요"
                value={input}
                onChange={changeHandler}
                className={validation || input.length ==0 ? styles.validationColor : styles.errorColor}
              />
              <button 
                onClick={onClickCheck} 
                className={validation ? styles.validButtonStyle : styles.invalidButtonStyle}
              >
                중복체크
              </button>
            </div>
            <div className={styles.messageContainer }>
              {doubleCheck ? (
                <span className={styles.okColor}>{message || '\u00A0'}</span>
              ) : (
                <span className={styles.errorColor}>{input.length !== 0 ? (message || '\u00A0') : '\u00A0'}</span>
              )}
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
          <button onClick={onClickEdit}>수정 완료</button>
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
              <button
                disabled={!check}
                onClick={onClickWithdraw}
              >
                회원 탈퇴
              </button>
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
                  onChange={(e) => {
                    setImg(URL.createObjectURL(e.target.files![0]));
                    setFilemodal(false);
                    setFile(e.target.files![0]);
                  }}
                />
                <button
                  onClick={() => {
                    setImg('');
                    convertURLtoFile(defaultImage).then((res) => setFile(res));
                    setFilemodal(false);
                  }}
                >
                  기본 이미지로 변경
                </button>
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

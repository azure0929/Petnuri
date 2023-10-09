import Background from "@/components/Background";
import styles from "@/styles/editinfo.module.scss";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { IoIosAdd } from "react-icons/io";
import { useEffect, useState } from "react";
import {
  editProfile,
  getMypage,
  nickCheck,
  withdraw,
} from "@/lib/apis/mypageApi";
import defaultImage from "@/assets/defaultImage.png";
import WithdrawModal from "@/components/editinfo/WithdrawModal";
import FileSelectModal from "@/components/editinfo/FileSelectModal";
import { removeCookie } from "@/utils/Cookie";
import { createToast } from "@/utils/ToastUtils";

const EditInfo = () => {
  const [modal, setModal] = useState(false);
  const [filemodal, setFilemodal] = useState(false);
  const [input, setInput] = useState("");
  const [validation, setValidation] = useState(false);
  const [check, setCheck] = useState(false);
  const [img, setImg] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState();
  const [file, setFile] = useState<File>();
  const [doubleCheck, setDoubleCheck] = useState(false);
  const [message, setMessage] = useState("");
  const [isImageChanged, setImageChanged] = useState(false);
  const [isNicknameChecked, setNicknameChecked] = useState(false);

  const convertURLtoFile = async (url: string) => {
    const response = await fetch(url);
    const data = await response.blob();
    const ext = url.split(".").pop();
    const filename = url.split("/").pop();
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
      const res = await nickCheck(input);
      if (!res?.data.isExists) {
        setMessage("사용 가능합니다.");
        setDoubleCheck(true);
        setNicknameChecked(true);
      } else if (res?.data.isExists) {
        setMessage("다른 닉네임을 사용해주세요.");
        setDoubleCheck(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const a = getMypage();
    a.then((res) => {
      setNickname(res.nickname);
      setEmail(res.email);
      setImg(res.profileImageUrl);
      setImageChanged(false);
    });
  }, []);

  const onClickEdit = () => {
    if (doubleCheck || input == "") {
      let temp = input;
      if (input == "") {
        temp = nickname;
      }
      editProfile(temp, file).then(() => {
        navigate("/mypage");
      });
    }
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);

    const pattern = /^[a-zA-Z가-힣]+$/;

    if (
      pattern.test(e.target.value) &&
      e.target.value.length >= 2 &&
      e.target.value.length <= 10
    ) {
      setValidation(true);
      setMessage("");
    } else {
      setValidation(false);
      setMessage("숫자,특수문자,공백 제외 최소 2자~10자까지 입력");
    }

    if (doubleCheck) {
      setDoubleCheck(false);
      setMessage("");
    }
  };

  const onClickWithdraw = async () => {
    await withdraw();
    localStorage.removeItem("kakaoToken");
    localStorage.removeItem("jwtRefreshToken");
    localStorage.removeItem("email");
    removeCookie("jwtToken");
    createToast("success", "회원탈퇴에 성공했습니다");
    navigate("/");
  };

  return (
    <Background>
      <div className={styles.contain}>
        <div className={styles.header}>
          <AiOutlineLeft className={styles.icon} onClick={onClickBack} />
          프로필 수정
        </div>
        <div className={styles.info}>
          <div className={styles.photoarea}>
            <div
              className={styles.photo}
              style={{
                backgroundImage: `url(${img ? img : defaultImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
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
            <div
              className={`${styles.nickinput} ${
                validation || input.length == 0
                  ? styles.validationBorder
                  : styles.errorBorder
              }`}
            >
              <input
                placeholder="수정을 원하실 경우 입력해주세요"
                value={input}
                onChange={changeHandler}
                className={
                  validation || input.length == 0
                    ? styles.validationColor
                    : styles.errorColor
                }
              />
              <button
                onClick={onClickCheck}
                className={
                  validation
                    ? styles.validButtonStyle
                    : styles.invalidButtonStyle
                }
              >
                중복체크
              </button>
            </div>
            <div className={styles.messageContainer}>
              {doubleCheck ? (
                <span className={styles.okColor}>{message || "\u00A0"}</span>
              ) : (
                <span className={styles.errorColor}>
                  {input.length !== 0 ? message || "\u00A0" : "\u00A0"}
                </span>
              )}
            </div>
          </div>
        </div>
        <div className={styles.exit} onClick={() => setModal(true)}>
          회원 탈퇴
          <AiOutlineRight />
        </div>
        <div className={styles.editbtnarea}>
          <button
            onClick={onClickEdit}
            disabled={!isImageChanged && !isNicknameChecked}
            className={`${
              !isImageChanged && !isNicknameChecked ? styles.disabled : ""
            }`}
          >
            수정 완료
          </button>
        </div>
        {modal === true ? (
          <WithdrawModal
            check={check}
            setCheck={setCheck}
            setModal={setModal}
            onClickWithdraw={onClickWithdraw}
          />
        ) : null}

        {filemodal ? (
          <FileSelectModal
            setImg={setImg}
            setFilemodal={setFilemodal}
            setFile={setFile}
            setImageChanged={setImageChanged}
            convertURLtoFile={convertURLtoFile}
            defaultImage={defaultImage}
          />
        ) : null}
      </div>
    </Background>
  );
};
export default EditInfo;

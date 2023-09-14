import BottomSheet from "@/components/BottomSheet";
import styles from "@/styles/savebs.module.scss";
import addIcon from "@/assets/icon-plus-circle-mono.svg";
import { bottomSheetState } from "@/store/challengeState";
import { useSetRecoilState } from "recoil";
import closeIcon from "@/assets/close.svg";
import { useState, useRef } from "react";

const SaveBS = () => {
  const setBottomIsOpen = useSetRecoilState(bottomSheetState);
  const [newUserImg, setNewUserImg] = useState<string>();

  const closeBS = () => {
    setBottomIsOpen(false);
  };

  const uploadImage = (e) => {
    const files = e.target.files as FileList;
    for (const file of Array.from(files)) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.addEventListener("load", (e) => {
        setNewUserImg(e.target?.result as string);
      });
    }
  };

  const fileInputRef = useRef(null);

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); // 숨겨진 input 요소를 클릭함
    }
  };

  return (
    <>
      <BottomSheet>
        <div className={styles.bsContainer}>
          <div>
            <div className={styles.bsHead}>
              <span className={styles.bsTitle}>인증사진 올리기</span>
              <img
                className={styles.closeIcon}
                src={closeIcon}
                onClick={closeBS}
              />
            </div>
            <div className={styles.addImg} onClick={handleUploadClick}>
              <input
                className="userImg"
                type="file"
                onChange={uploadImage}
                style={{ display: "none" }}
                ref={fileInputRef}
              />
              {newUserImg ? (
                <img src={newUserImg} className={styles.saveImg} />
              ) : (
                <img src={addIcon} className={styles.addIcon} />
              )}
            </div>
            <input
              className={styles.addText}
              placeholder="게시글을 입력해주세요"
            />
          </div>
          <span className={styles.autoSave}>
            펫톡-챌린지 탭에 자동 등록 됩니다.
          </span>
          <button className={styles.button} onClick={closeBS}>
            인증하기
          </button>
        </div>
      </BottomSheet>
    </>
  );
};
export default SaveBS;

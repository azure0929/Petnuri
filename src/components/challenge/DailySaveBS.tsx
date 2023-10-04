import BottomSheet from "@/components/challenge/SaveBSLayout";
import styles from "@/styles/challenge/dailysavebs.module.scss";
import addIcon from "@/assets/icon-plus-circle-mono.svg";
import { bottomSheetState } from "@/store/challengeState";
import { useSetRecoilState } from "recoil";
import closeIcon from "@/assets/close.svg";
import { useState, useRef } from "react";
import { createToast } from "@/utils/ToastUtils";
import { dailyReviewApi } from "@/lib/apis/challengeApi"

const DailySaveBS = () => {
  const setBottomIsOpen = useSetRecoilState(bottomSheetState);
  const sucess = () => createToast("success", "포인트 지급이 완료되었습니다.");

    const review = async () => {
    try {
      if (!newUserImg) {
        throw new Error("이미지 파일을 선택해주세요.");
      }
      await dailyReviewApi(newUserImg);
    } catch (error) {
      console.error("Error in reivew: " + error);
    }
  };


  // 이미지 업로드
  const [newUserImg, setNewUserImg] = useState<File | null>(null);

  const isFileSizeValid = (file: File, maxSizeInBytes: number) => {
    return file.size <= maxSizeInBytes;
  };

  const MAX_FILE_SIZE = 1024 * 1024; // 1MB, 바이트 단위로 설정

  const uploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) return;

    const selectedFile = e.target.files[0];

    if (!isFileSizeValid(selectedFile, MAX_FILE_SIZE)) {
      alert("이미지 파일 크기가 너무 큽니다. mb 이하의 이미지를 선택해주세요.");
      return;
    }
  
    setNewUserImg(selectedFile);
  };

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); // 숨겨진 input 요소를 클릭함
    }
  };

    const closeBS = () => {
      review()
    sucess();
    setBottomIsOpen(false);
  };

  return (
    <>
      <BottomSheet>
        <div className={styles.bsHead}>
          <span className={styles.bsTitle}>인증사진 올리기</span>
          <img className={styles.closeIcon} src={closeIcon} onClick={closeBS} />
        </div>
        <div className={styles.container}>
          <div className={styles.addImg} onClick={handleUploadClick}>
            <input
              className="userImg"
              type="file"
              onChange={uploadImage}
              style={{ display: "none" }}
              ref={fileInputRef}
            />
            {newUserImg ? (
              <img
                src={`${URL.createObjectURL(newUserImg)}`}
                alt="uploaded-img"
                className={styles.saveImg}
              />            ) : (
              <img src={addIcon} className={styles.addIcon} />
            )}
          </div>
          <button className={styles.button} onClick={closeBS}>
            인증하기
          </button>
        </div>
      </BottomSheet>
    </>
  );
};
export default DailySaveBS;

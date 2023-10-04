import BottomSheet from "@/components/challenge/EventBSLayout";
import styles from "@/styles/challenge/eventbs.module.scss";
import addIcon from "@/assets/icon-plus-circle-mono.svg";
import { bottomSheetState } from "@/store/challengeState";
import { useSetRecoilState } from "recoil";
import closeIcon from "@/assets/close.svg";
import { useState, useRef } from "react";
import { createToast } from "@/utils/ToastUtils";
import { ECyanadoReviewApi } from "@/lib/apis/challengeApi";

const EventSaveBS = () => {
  const setBottomIsOpen = useSetRecoilState(bottomSheetState);
  const sucess = () => createToast("success", "포인트 지급이 완료되었습니다.");
  const error = () => createToast("error", "취소되었습니다.");
  const [content, setContent] = useState<string>("");

  const review = async () => {
    try {
      if (!newUserImg) {
        throw new Error("이미지 파일을 선택해주세요.");
      }
      await ECyanadoReviewApi(newUserImg, content);
    } catch (error) {
      console.error("Error in reivew: " + error);
    }
  };

  // 이미지 업로드
  const [newUserImg, setNewUserImg] = useState<File | null>(null);

  const uploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) return;

    setNewUserImg(e.target.files[0]);
  };

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleUploadClick = () => {
    if (fileInputRef.current) fileInputRef.current.click(); // 숨겨진 input 요소를 클릭함
  };

  const closeBS = () => {
    if (newUserImg) {
      review();
      sucess();
      setBottomIsOpen(false);
    } else {
      error();
      setBottomIsOpen(false);
    }
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
              />
            ) : (
              <img src={addIcon} className={styles.addIcon} />
            )}
          </div>
          <input
            className={styles.addText}
            placeholder="게시글을 입력해주세요"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
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
export default EventSaveBS;

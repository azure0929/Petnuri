import BottomSheet from "@/components/challenge/EventBSLayout";
import styles from "@/styles/challenge/eventbs.module.scss";
import addIcon from "@/assets/icon-plus-circle-mono.svg";
import { EventBottomSheetState } from "@/store/challengeState";
import { useSetRecoilState } from "recoil";
import closeIcon from "@/assets/close.svg";
import { useState, useRef } from "react";
import { createToast } from "@/utils/ToastUtils";
import { ReviewApi } from "@/lib/apis/challengeApi";

interface EventSaveBSProps {
  eventName: string;
  id: number;
  onHandle: () => void;
}

const EventSaveBS: React.FC<EventSaveBSProps> = ({
  eventName,
  id,
  onHandle,
}) => {
  const setEventBottomIsOpen = useSetRecoilState(EventBottomSheetState);
  const sucess = () => createToast("success", "포인트 지급이 완료되었습니다.");
  const error = () => createToast("error", "취소되었습니다.");
  const [content, setContent] = useState<string>("");

  const review = async () => {
    try {
      if (!newUserImg) {
        throw new Error("이미지 파일을 선택해주세요.");
      }
      await ReviewApi(newUserImg, content, petType, eventName, id);
      onHandle();
    } catch (error) {
      console.log(error);
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

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleUploadClick = () => {
    if (fileInputRef.current) fileInputRef.current.click(); // 숨겨진 input 요소를 클릭함
  };

  const closeBS = () => {
    if (newUserImg && content && petType) {
      review();
      sucess();
      setEventBottomIsOpen(false);
    } else {
      setContent("");
      setNewUserImg(null);
      setPetType("");
      setEventBottomIsOpen(false);
      error();
    }
  };

  const [petType, setPetType] = useState<string>(""); // 초기값은 강아지

  // 반려동물 종 선택 핸들러
  const handlePetTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPetType(event.target.value);
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
          <div className={styles.selectContainer}>
            <div className={styles.selectTitle}>
              반려동물의 종을 선택해주세요
            </div>
            <div className={styles.selectPet}>
              <input
                type="radio"
                id="all-check"
                name="petType"
                value="DOG"
                // checked={petType === "DOG"}
                onChange={handlePetTypeChange}
              />
              <label htmlFor="all-check" className={styles.agreementLabel}>
                <span>강아지</span>
              </label>
              <input
                type="radio"
                id="check"
                name="petType"
                value="CAT"
                // checked={petType === "CAT"}
                onChange={handlePetTypeChange}
              />
              <label htmlFor="check" className={styles.agreementLabel}>
                <span>고양이</span>
              </label>
            </div>
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

import BottomSheet from "@/components/BottomSheet";
import styles from "@/styles/savebs.module.scss";
import { AiOutlinePlus } from "react-icons/ai";

const SaveBS = () => {
  return (
    <>
      <BottomSheet>
        <div className={styles.bsContainer}>
          <div>
            <div className={styles.addImg}>
              <AiOutlinePlus className={styles.addIcon} />
              <div>사진추가</div>
            </div>
            <input
              className={styles.addText}
              placeholder="게시글을 입력해주세요"
            />
          </div>
          <button className={styles.button}>작성완료</button>
        </div>
      </BottomSheet>
    </>
  );
};
export default SaveBS;

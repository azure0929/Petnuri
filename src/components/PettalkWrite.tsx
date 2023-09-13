import styles from '@/styles/write.module.scss';
import { AiOutlinePlus } from 'react-icons/ai';

const PettalkWrite = () => {
  return (
    <div className={styles.all}>
      <div className={styles.selectarea}>
        <select
          name="category"
          className={styles.category}
        >
          <option>카테고리를 선택하세요</option>
        </select>
      </div>
      <div className={styles.photoarea}>
        <div className={styles.photo}>사진 등록하기</div>
        <div>
          <label htmlFor="file">
            <div className={styles.upload}>
              <AiOutlinePlus className={styles.icon} />
            </div>
          </label>
          <input
            type="file"
            name="file"
            id="file"
            style={{ display: 'none' }}
            multiple
          />
        </div>
      </div>
      <div className={styles.titlearea}>
        <div className={styles.title}>제목을 입력해주세요</div>
        <input placeholder="제목을 입력해주세요." />
      </div>
      <div className={styles.textarea}>
        <div className={styles.text}>게시글을 입력해주세요</div>
        <textarea placeholder="욕설과 비방의 내용은 제재의 대상이 될 수 있습니다." />
      </div>
      <div className={styles.btnarea}>
        <button>작성 완료</button>
      </div>
    </div>
  );
};

export default PettalkWrite;

import styles from "@/styles/pettalkdetail.module.scss";
import { useState } from "react";

const CommentItem = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className={styles.item}>
      <div className={styles.user_info}>
        <img src="" alt="profile" />
        <span className={styles.name}>닉네임</span>
        <span className={styles.date}>・ 작성 날짜</span>
      </div>

      <div className={styles.item_content}>
        <span
          className={isExpanded ? styles.expandedText : styles.collapsedText}
        >
          강아지 온 몸 피부에 올라오고 많이 긁어요 ㅠ ㅠ 텍 스트는 두줄까지
          가능가능 강아지 온 몸 피부에 올라오고 많이 긁어요ㅠㅠㅠ 텍스트는
          두줄까지 가능가능
        </span>
        {isExpanded || (
          <button className={styles.expandButton} onClick={toggleExpand}>
            ...더보기
          </button>
        )}
        <button className={styles.reReply}>대댓글 달기</button>
      </div>
    </div>
  );
};

export default CommentItem;

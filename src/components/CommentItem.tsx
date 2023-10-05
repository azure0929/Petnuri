import styles from "@/styles/pettalkdetail.module.scss";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { usePettalkReply } from "@/lib/hooks/pettalkList";
import default_user from "@/assets/user.png";
import { formatDate } from "@/utils/DateFormat";

const CommentItem = () => {
  const { petTalkId } = useParams();

  const [isExpanded, setIsExpanded] = useState(false);
  const { data } = usePettalkReply(Number(petTalkId));

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <>
      {data && data?.length > 0 ? (
        data?.map((item: ReplyItem) => (
          <div key={item.replyId} className={styles.item}>
            <div className={styles.user_info}>
              {item?.writer?.profileImageUrl === null ? (
                <img src={default_user} alt="default-img" />
              ) : (
                <img src={item?.writer?.profileImageUrl} alt="profile-img" />
              )}
              <span className={styles.name}>{item?.writer?.nickname}</span>
              <span className={styles.date}>
                ・ {formatDate(item?.createdAt)}
              </span>
            </div>

            <div className={styles.item_content}>
              <span
                className={
                  isExpanded ? styles.expandedText : styles.collapsedText
                }
              >
                {item?.content}
              </span>
              {isExpanded || (
                <button className={styles.expandButton} onClick={toggleExpand}>
                  ...더보기
                </button>
              )}
              <button className={styles.reReply}>대댓글 달기</button>
            </div>
          </div>
        ))
      ) : (
        <div>아직 등록된 댓글이 없습니다.</div>
      )}
    </>
  );
};

export default CommentItem;

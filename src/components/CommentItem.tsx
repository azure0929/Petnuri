import styles from "@/styles/pettalkdetail.module.scss";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { usePettalkReply } from "@/lib/hooks/pettalkList";
import default_user from "@/assets/user.png";
import { formatDate } from "@/utils/DateFormat";

interface CommentItemProps {
  parentId: number | null;
  parentUserName: string | null;
}
const CommentItem: React.FC<CommentItemProps> = ({
  parentId,
  parentUserName,
}) => {
  const { petTalkId } = useParams();
  const [isExpanded, setIsExpanded] = useState(false);

  const { data } = usePettalkReply(Number(petTalkId));

  console.log(parentId, parentUserName);

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
                  item?.content.split("\n").length > 2
                    ? isExpanded
                      ? styles.expandedText
                      : styles.collapsedText
                    : styles.expandedText
                }
              >
                {item?.content}
              </span>
              {item?.content.split("\n").length > 2 && !isExpanded && (
                <button className={styles.expandButton} onClick={toggleExpand}>
                  ...더보기
                </button>
              )}
              <div>
                {item?.tag ? (
                  <div>
                    <span>{item?.tag?.taggedMemberId}</span>
                    <span>{item?.tag?.nickname}</span>
                  </div>
                ) : null}
                <button className={styles.reReply}>대댓글 달기</button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className={styles.noList_wrapper}>
          아직 등록된 댓글이 없습니다.
        </div>
      )}
    </>
  );
};

export default CommentItem;

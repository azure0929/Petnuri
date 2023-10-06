import styles from "@/styles/challenge/challengejoin.module.scss";
import { useScrollDiv } from "@/utils/Scroll";

interface JoinListsProps {
  joinLists: ChallengeJoin[];
}

const ChallengeJoin: React.FC<JoinListsProps> = ({ joinLists }) => {
  const scrollRef = useScrollDiv();

  return (
    <>
      <span className={styles.title}>참여현황</span>
      <div className={styles.participants} ref={scrollRef}>
        {joinLists
          ? joinLists.map((joinItem) => (
              <div
                key={joinItem.id || joinItem.memberId}
                className={styles.info}
              >
                <img
                  src={joinItem.photoUrl || joinItem.imageUrl}
                  alt="Review"
                  className={styles.img}
                />
                <div className={styles.name}>
                  <span>{joinItem.id || joinItem.memberId}</span>
                </div>
              </div>
            ))
          : null}
      </div>
    </>
  );
};

export default ChallengeJoin;

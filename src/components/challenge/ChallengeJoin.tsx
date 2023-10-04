import styles from "@/styles/challenge/challengejoin.module.scss";
import { useScrollDiv } from "@/utils/Scroll";

interface JoinListsProps {
  joinLists: ChallengeJoin[]
}

const ChallengeJoin:React.FC<JoinListsProps> = ({ joinLists }) => {
  const scrollRef = useScrollDiv();

  return (
    <>
      <span className={styles.title}>다른 집사들도 참여중이에요!</span>
      <div className={styles.participants} >
      {joinLists.length > 0? (
        joinLists.map((joinItem) =>
          <div key={joinItem.id} className={styles.info} ref={scrollRef}>
            <img src={joinItem.participantsImg} alt="Review" className={styles.img} />
            <div className={styles.name}>
              <span>{joinItem.participantsName}</span>
            </div>
          </div>
        )) : (
        <div className={styles.noJoin}>
          <span>아직 아무도 참여를 안했습니다</span>
        </div>
      )}
      </div>
    </>
  );
};

export default ChallengeJoin;

import styles from "@/styles/challengejoin.module.scss";
import { useRef, useEffect } from 'react'

const ChallengeJoin = ({ join }: ChallengeJoinProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  let startTouchX = 0;

  useEffect(() => {
    const handleWheel = (e:any) => {
      if (e.deltaY === 0 || !scrollRef.current) return;
      e.preventDefault();
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += e.deltaY;
      }
    };
    const handleTouchStart = (e:any) => {
      if (!scrollRef.current) return;
      startTouchX = e.touches[0].clientX; 
    };
    const handleTouchMove = (e:any) => {
      if (!scrollRef.current) return;
      e.preventDefault();
      const xDiff = startTouchX - e.touches[0].clientX;
      if (scrollRef.current){ 
        scrollRef.current.scrollLeft += xDiff;
        startTouchX = e.touches[0].clientX;
      }
    };
    const element = scrollRef.current;
    if (element) {
      element.addEventListener('wheel', handleWheel, { passive: false });
      element.addEventListener('touchstart', handleTouchStart);
      element.addEventListener('touchmove', handleTouchMove);

      return () => {
        if (element){
          element.removeEventListener('wheel', handleWheel);
          element.removeEventListener('touchstart', handleTouchStart);
          element.removeEventListener('touchmove', handleTouchMove);
        }
      };
     }
   }, []);

  return (
    <>
     <span className={styles.title}>다른 집사들도 참여중이에요!</span>
      <div className={styles.participants} ref={scrollRef}>
        {join.map((review, index) => (
          <div key={index} className={styles.info}>
            <img 
              src={review.reviewImgUrl} 
              alt="Review" 
              className={styles.img}/>
            <div className={styles.name}>
              <span>{review.reviewUserNickname}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ChallengeJoin;

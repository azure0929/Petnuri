import { useState } from "react";
import Pagination from "../Pagination";
import styles from "@/styles/challenge/challengeitem.module.scss";
import { useScrollDiv } from "@/utils/Scroll";

const ChallengeItem = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = 5; // 전체 페이지

  // 각 페이지에 해당하는 이미지 URL 배열
  const imageUrls = [
    "url_페이지1_이미지",
    "url_페이지2_이미지",
    "url_페이지3_이미지",
    "url_페이지4_이미지",
    "url_페이지5_이미지",
  ];

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    // 페이지 변경 로직 추가: 이 함수에서 페이지 변경에 필요한 동작을 수행합니다.
  };

  const scrollRef = useScrollDiv();

  const handleWheel = (e) => {
    if (e.deltaY > 0) {
      // 아래로 스크롤: 다음 페이지로 이동
      if (currentPage < totalPages) {
        setCurrentPage(currentPage + 1);
      }
    } else if (e.deltaY < 0) {
      // 위로 스크롤: 이전 페이지로 이동
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    }
  };

  return (
    <>
      <div className={styles.itemContainer}>
        <div className={styles.head}>검진키트 배너</div>
        <div
          className={styles.imgContainer}
          onWheel={handleWheel}
          ref={scrollRef}
        >
          <div className={styles.img}>
            {/* 페이지에 해당하는 이미지 표시 */}
            <img
              src={imageUrls[currentPage - 1]}
              alt={`페이지 ${currentPage} 이미지`}
            />
          </div>
          <div>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ChallengeItem;

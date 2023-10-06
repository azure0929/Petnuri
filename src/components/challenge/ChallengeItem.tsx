import { useState } from "react";
import Pagination from "../Pagination";
import styles from "@/styles/challenge/challengeitem.module.scss";
import { useSetRecoilState } from "recoil";
import { kitModalState } from "@/store/challengeState";
import 표지 from "@/assets/표지.png";
import 커밍순 from "@/assets/커밍순.png";
import 홍보1 from "@/assets/홍보1.png";
import 홍보2 from "@/assets/홍보2.png";
import 홍보3 from "@/assets/홍보3.png";
import 홍보4 from "@/assets/홍보4.png";

const ChallengeItem = () => {
  const setKitOpen = useSetRecoilState(kitModalState);
  const [currentPage, setCurrentPage] = useState<number>(1);

  // 각 페이지에 해당하는 이미지 URL 배열

  const imageUrls = [표지, 홍보1, 홍보2, 홍보3, 홍보4, 커밍순];

  const totalPages = imageUrls.length; // 전체 페이지

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    // 페이지 변경 로직 추가: 이 함수에서 페이지 변경에 필요한 동작을 수행합니다.
  };

  return (
    <>
      <div className={styles.itemContainer}>
        <div className={styles.head}>검진키트 배너</div>
        <div className={styles.imgContainer}>
          <div className={styles.img} onClick={() => setKitOpen(true)}>
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

import styles from "@/styles/pagination.module.scss";
import { useScrollUl } from "@/utils/Scroll";
import activeDot from "@/assets/active dot.svg";
import activeNoDot from "@/assets/active no dot.svg";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (newPage: number) => void;
}

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const scrollRef = useScrollUl();
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  return (
    <div className={styles.pagination} ref={scrollRef}>
      {pageNumbers.map((page) => (
        <span
          key={page}
          onClick={() => onPageChange(page)}
          className={styles.paginationNumber}
        >
          {/* 선택된 페이지와 선택되지 않은 페이지 아이콘 */}
          {currentPage === page ? (
            <img src={activeDot} />
          ) : (
            <img src={activeNoDot} />
          )}
        </span>
      ))}
    </div>
  );
};

export default Pagination;

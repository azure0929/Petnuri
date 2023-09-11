import MainTab from "@/components/MainTab";
import Background from "@/components/Background";
import styles from '@/styles/pointshop.module.scss'
import creditImage from '/credit.png'
import { IoIosArrowBack } from 'react-icons/io'
import { Link } from "react-router-dom";

const PointShop = () => {
  return (
    <>
      <Background>
        <div className={styles.head}>
          <Link 
            to="/challenge">
            <IoIosArrowBack size="32"/>
          </Link>
          <span>포인트샵</span>
          <div className={styles.eorl}></div>
        </div>

        <div className={styles.name}>
          <div className={styles.img}></div>
          <div className={styles.title}>닉네임</div>
          <div className={styles.date}> 23.03.06</div>
        </div>

        <div className={styles.credit}>
          1220 크레딧 
          <img src={creditImage} alt="credit" />
        </div>

        <div className={styles.ad}></div>

        <div className={styles.p_title}>큰 타이틀</div>

        <div className={styles.product}>
          <div className={styles.info}>
            <div className={styles.box1}>
              <div className={styles.box2}>
                 상품 이미지인듯
              </div>
            </div>

            <div className={styles.text}>
              <div className={styles.price}>
                <span className={styles.sale}> 11% </span>
                <span className={styles.realPrice}> 99,999원 </span>
              </div>
              <div className={styles.sub}>상품 제목</div>
            </div>
          </div>
        </div>
      </Background>
      <MainTab />
    </>
  );
};
export default PointShop;

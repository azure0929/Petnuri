import MainTab from "@/components/MainTab";
import Background from "@/components/Background";
import styles from '@/styles/pointshop.module.scss'
import credit from '@/assets/credit.svg'
import dog from '@/assets/dog.svg'
import product1 from '@/assets/product1.svg'
import product2 from '@/assets/product2.svg'
import product3 from '@/assets/product3.svg'
import product4 from '@/assets/product4.svg'
import { IoIosArrowBack } from 'react-icons/io'
import { Link } from "react-router-dom";

const PointShop = () => {
  return (
    <>
      <Background>
        <div className={styles.head}>
          <Link 
            to="/challenge">
            <IoIosArrowBack size="24" className={styles.io}/>
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
          <img src={credit} alt="credit" />
        </div>

        <div className={styles.ad}>
          <img src={dog} alt="dog" />
          <div className={styles.banner}>프로모션 배너</div>
          <div className={styles.banner_sub}>프로모션 배너 서브텍스트</div>
        </div>

        <div className={styles.p_title}>큰 타이틀</div>

        <div className={styles.product}>
          <div className={styles.info}>
            <div className={styles.box}>
              <img src={product1} alt="product1" />
            </div>
            <div className={styles.text}>
              <div className={styles.price}>
                <span className={styles.sale}> 11% </span>
                <span className={styles.realPrice}> 99,999원 </span>
              </div>
              <div className={styles.sub}>누구나 탐내는 펫 급식기</div>
            </div>
          </div>

          <div className={styles.info}>
            <div className={styles.box}>
              <img src={product2} alt="product2" />
            </div>
            <div className={styles.text}>
              <div className={styles.price}>
                <span className={styles.sale}> 11% </span>
                <span className={styles.realPrice}> 99,999원 </span>
              </div>
              <div className={styles.sub}>누구나 탐내는 펫 급수기</div>
            </div>
          </div>

          <div className={styles.info}>
            <div className={styles.box}>
              <img src={product3} alt="product3" />
            </div>
            <div className={styles.text}>
              <div className={styles.price}>
                <span className={styles.sale}> 11% </span>
                <span className={styles.realPrice}> 99,999원 </span>
              </div>
              <div className={styles.sub}>누르면 나오는 간식 발사기</div>
            </div>
          </div>

          <div className={styles.info}>
            <div className={styles.box}>
              <img src={product4} alt="product4" />
            </div>
            <div className={styles.text}>
              <div className={styles.price}>
                <span className={styles.sale}> 11% </span>
                <span className={styles.realPrice}> 99,999원 </span>
              </div>
              <div className={styles.sub}>누구나 탐내는 진공 사료통</div>
            </div>
          </div>
        </div>
      </Background>
      <MainTab />
    </>
  );
};
export default PointShop;

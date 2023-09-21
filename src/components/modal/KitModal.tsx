import Modal from './Modal';
import styles from '@/styles/kitmodal.module.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useSetRecoilState } from 'recoil';
import { kitModalState } from "@/store/challengeState";
import dog from '@/assets/dog.svg'
import product1 from '@/assets/product1.svg'
import product2 from '@/assets/product2.svg'
import product3 from '@/assets/product3.svg'
import product4 from '@/assets/product4.svg'


const KitModal = () => {
  const setIsOpen = useSetRecoilState(kitModalState); 
  const images = [dog,product1,product2,product3,product4]
  
  const handleClose = () => {
    setIsOpen(false);
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: false,
  };

return (
  <>
    <Modal height={562} modalType='kit'>
      <p className={styles.head}>펫 누리 비대면 검진키트</p>
      <div className={styles.sliderWrapper}>
        <Slider {...settings}>
          {images.map((image, index) =>(
            <div key={index}>
              <img src={image} alt="" className={styles.img}/>
            </div>
          ))}
        </Slider>
      </div>
      <div className={styles.okWrapper}>
        <button onClick={handleClose} className={styles.ok}> 닫기 </button>
      </div>
    </Modal>
  </>
 );
};

export default KitModal
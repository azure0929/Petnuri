import Modal from './Modal';
import styles from '@/styles/kitmodal.module.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useSetRecoilState } from 'recoil';
import { kitModalState } from "@/store/challengeState";
import 표지 from '@/assets/표지.png'
import 홍보1 from '@/assets/홍보1.png'
import 홍보2 from '@/assets/홍보2.png'
import 홍보3 from '@/assets/홍보3.png'
import 홍보4 from '@/assets/홍보4.png'


const KitModal = () => {
  const setIsOpen = useSetRecoilState(kitModalState); 
  const images = [표지,홍보1,홍보2,홍보3,홍보4]
  
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
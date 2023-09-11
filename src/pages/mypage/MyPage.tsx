import MainTab from '../../components/MainTab';
import Background from '../../components/Background';
import styles from '@/styles/mypage.module.scss';
import { IoIosAdd } from 'react-icons/io';
import { IoSettingsSharp } from 'react-icons/io5';
import { AiOutlineRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const MyPage = () => {
  return (
    <>
      <Background>
        <div className={styles.head}>
          <p>마이페이지</p>
        </div>
        <div className={styles.info}>
          <div className={styles.photoarea}>
            <div className={styles.photo}>
              <div className={styles.plusbtn}>
                <IoIosAdd />
              </div>
            </div>
          </div>
          <div className={styles.nickarea}>
            <p className={styles.nickname}>여덟글자까지가능</p>
            <p className={styles.email}>Yu-jin@kakao.com</p>
          </div>
          <div className={styles.setting}>
            <Link to="/mypage/editinfo">
              <IoSettingsSharp />
            </Link>
          </div>
        </div>
        <div className={styles.space}></div>
        <div className={styles.contents}>
          <div>
            자주하는 질문
            <span>
              <AiOutlineRight />
            </span>
          </div>
          <div>
            공지사항
            <span>
              <AiOutlineRight />
            </span>
          </div>
          <div>
            이용안내
            <span>
              <AiOutlineRight />
            </span>
          </div>
          <div>
            1:1 채팅상담
            <span>
              <AiOutlineRight />
            </span>
          </div>
          <div>
            로그아웃
            <span>
              <AiOutlineRight />
            </span>
          </div>
        </div>
      </Background>
      <MainTab />
    </>
  );
};
export default MyPage;

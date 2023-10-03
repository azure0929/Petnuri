import MainTab from '../../components/MainTab';
import Background from '../../components/Background';
import styles from '@/styles/mypage.module.scss';
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
            <div className={styles.photo}></div>
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
            배송지 등록
            <span>
              <Link to="/mypage/adress">
                <AiOutlineRight />
              </Link>
            </span>
          </div>
          <div>
            자주하는 질문
            <span>
              <Link
                to="https://petnuri.notion.site/e5e6f86a0f3449819df35f848cdf9b71?pvs=4"
                target="_blank"
              >
                <AiOutlineRight />
              </Link>
            </span>
          </div>
          <div>
            공지사항
            <span>
              <Link
                to="https://petnuri.notion.site/350d52a344a44fa2b7acd4324d6982e3?pvs=4"
                target="_blank"
              >
                <AiOutlineRight />
              </Link>
            </span>
          </div>
          <div>
            이용안내
            <span>
              <Link
                to="https://petnuri.notion.site/644c4d55df524a22b5fd3bba360ad1ec?pvs=4"
                target="_blank"
              >
                <AiOutlineRight />
              </Link>
            </span>
          </div>
          <div>
            1:1 채팅상담
            <span>
              <Link
                to="http://pf.kakao.com/_RfxnuG/chat"
                target="_blank"
              >
                <AiOutlineRight />
              </Link>
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

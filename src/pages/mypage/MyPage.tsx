import MainTab from '../../components/MainTab';
import Background from '../../components/Background';
import styles from '@/styles/mypage.module.scss';
import { IoSettingsSharp } from 'react-icons/io5';
import { AiOutlineRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { getMypage, logout, withdraw } from '@/lib/apis/mypageApi';
import { useEffect, useState } from 'react';
import defaultImage from '@/assets/defaultImage.png';

const MyPage = () => {
  const [nickname, setNickname] = useState();
  const [email, setEmail] = useState();
  const [img, setImg] = useState();
  useEffect(() => {
    const a = getMypage();
    a.then((res) => {
      console.log('res::', res);
      setNickname(res.nickname);
      setEmail(res.email);
      setImg(res.profileImageUrl);
    });
    console.log('---', a);
  }, []);

  const onClickLogout = () => {
    // const res = logout();
    // res
    //   .then(() => {
    //     alert('로그아웃 성공');
    //   })
    //   .catch((error) => {
    //     alert(error);
    //   });
  };

  return (
    <>
      <Background>
        <div className={styles.head}>
          <p>마이페이지</p>
        </div>
        <div className={styles.info}>
          <div className={styles.photoarea}>
            <img
              className={styles.photo}
              src={img ? img : defaultImage}
            ></img>
          </div>
          <div className={styles.nickarea}>
            <p className={styles.nickname}>{nickname}</p>
            <p className={styles.email}>{email}</p>
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
              <Link to="/mypage/delivery">
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
          <div onClick={onClickLogout}>
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

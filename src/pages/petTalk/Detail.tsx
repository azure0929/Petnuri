import MainTab from "@/components/MainTab";
import Background from "@/components/Background";
import styles from "@/styles/pettalkdetail.module.scss";
import { useNavigate } from "react-router-dom";

import Head from "@/components/Head";
import heart from "../../assets/heart_18px.svg";
import talk from "../../assets/talk_18px.svg";
import view from "../../assets/view_18px.svg";

import { AiOutlineLeft } from "react-icons/ai";

const PetTaliDetail = () => {
  const navigate = useNavigate();

  const onClickBack = () => {
    navigate(-1);
  };
  return (
    <>
      <Background>
        <div className={styles.pettalk_area}>
          <Head
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div className={styles.header}>
              <AiOutlineLeft className={styles.icon} onClick={onClickBack} />
              고민상담
            </div>
          </Head>

          <div className={styles.content_wrapper}>
            <div className={styles.item}>
              <div className={styles.user_info}>
                <img src="" alt="profile-img" />
                <span className={styles.user_name}>닉네임</span>
                <span className={styles.today_date}>・ 게시된 날짜 넣기</span>
              </div>
              <div className={styles.title}>제목 텍스트 입니다.</div>
              <div className={styles.text_wrapper}>
                <div className={styles.content_text}>
                  꿍이가 아파요 어뜩하죠ㅠㅠ 꿍이가 아파요 어뜩하죠ㅠㅠ 꿍이가
                  아파요 어뜩하죠ㅠㅠ 꿍이가 아파요 어뜩하죠ㅠㅠ 꿍이가 아파요
                  어뜩하죠ㅠㅠ 꿍이가 아파요 어뜩하죠ㅠㅠ 꿍이가 아파요
                  어뜩하죠ㅠㅠ
                </div>
              </div>

              {/* 이미지가 없는 게시글이면 숨겨지도록 작업예정 */}
              <div className={styles.content_img}>
                <img src="" alt="예시이미지" />
              </div>
              <div className={styles.response_wrapper}>
                <div className={styles.icon_area}>
                  <img src={heart} alt="" />
                  <span>100</span>
                </div>
                <div className={styles.icon_area}>
                  <img src={talk} alt="" />
                  <span>100</span>
                </div>
                <div className={styles.icon_area}>
                  <img src={view} alt="" />
                  <span>100</span>
                </div>
              </div>
            </div>
          </div>
          <MainTab />
        </div>
      </Background>
    </>
  );
};
export default PetTaliDetail;

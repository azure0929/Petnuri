import Background from "@/components/Background";
import styles from "@/styles/pettalkdetail.module.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Head from "@/components/Head";
import CommentItem from "@/components/CommentItem";
import heart from "../../assets/heart_18px.svg";
import talk from "../../assets/talk_18px.svg";
import view from "../../assets/view_18px.svg";
import cute_off from "../../assets/Cute_off.png";
import funny_off from "../../assets/Funny_off.png";
import kiss_off from "../../assets/kiss_off.png";
import surprise_off from "../../assets/Surprise_off.png";
import sad_off from "../../assets/Sad_off.png";

import { AiOutlineLeft } from "react-icons/ai";

const PetTalkDetail = () => {
  const navigate = useNavigate();

  const onClickBack = () => {
    navigate(-1);
  };

  const [selectedButton, setSelectedButton] = useState<number | null>(null);

  const handleButtonClick = (index: number) => {
    if (selectedButton === index) {
      setSelectedButton(null);
    } else {
      setSelectedButton(index);
    }
  };

  const emojiData = [
    { imgSrc: cute_off, altText: "귀여워요", text: "귀여워요" },
    { imgSrc: funny_off, altText: "웃겨요", text: "웃겨요" },
    { imgSrc: kiss_off, altText: "뽀뽀", text: "뽀뽀" },
    { imgSrc: surprise_off, altText: "헉", text: "헉" },
    { imgSrc: sad_off, altText: "슬퍼요", text: "슬퍼요" },
  ];

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

          <div className={styles.emoji_wrapper}>
            {emojiData.map((emoji, index) => (
              <button
                key={index}
                className={`${styles.emoji_item} ${
                  selectedButton === index ? styles.selected : ""
                }`}
                onClick={() => handleButtonClick(index)}
              >
                <img
                  src={
                    selectedButton === index
                      ? emoji.imgSrc.replace("_off", "_on")
                      : emoji.imgSrc
                  }
                  alt={emoji.altText}
                />
                <span
                  style={{
                    fontWeight: selectedButton === index ? 600 : 400,
                    color: selectedButton === index ? "black" : "gray",
                  }}
                >
                  {emoji.text}
                </span>
              </button>
            ))}
          </div>

          <div className={styles.reply_wrapper}>
            {/* 댓글 ${count}개 */}
            <span className={styles.count}>{`댓글 42`}</span>
            <CommentItem />
            <CommentItem />
          </div>

          <div className={styles.replyWrite_wrapper}>
            <img src="" alt="profile" />
            <input type="text" placeholder="댓글을 작성해주세요" />
          </div>
        </div>
      </Background>
    </>
  );
};
export default PetTalkDetail;

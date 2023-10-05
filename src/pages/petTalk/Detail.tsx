import Background from "@/components/Background";
import styles from "@/styles/pettalkdetail.module.scss";
import { useState } from "react";
import Slider from "react-slick";
import { useNavigate, useParams } from "react-router-dom";
// import { pettalkDetail } from "@/lib/apis/pettalkApi";
import { usePettalkDetail } from "@/lib/hooks/pettalkList";
import Head from "@/components/Head";
import CommentItem from "@/components/CommentItem";
import LoginModal from "@/components/modal/LoginModal";
import heart from "@/assets/heart_18px.svg";
import talk from "@/assets/talk_18px.svg";
import view from "@/assets/view_18px.svg";
import cute_off from "@/assets/Cute_off.png";
import funny_off from "@/assets/Funny_off.png";
import kiss_off from "@/assets/kiss_off.png";
import surprise_off from "@/assets/Surprise_off.png";
import sad_off from "@/assets/Sad_off.png";
import default_user from "@/assets/user.png";

import { AiOutlineLeft } from "react-icons/ai";

const PetTalkDetail = () => {
  const navigate = useNavigate();
  const { petTalkId } = useParams();

  const [selectedButton, setSelectedButton] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data } = usePettalkDetail(Number(petTalkId));

  const onClickBack = () => {
    navigate(-1);
  };

  const handleButtonClick = (index: number) => {
    if (selectedButton === index) {
      setSelectedButton(null);
    } else {
      setSelectedButton(index);
    }
  };

  const handleInputFocus = () => {
    const isLoggedIn = false;
    if (!isLoggedIn) {
      setIsModalOpen(true);
    }
  };

  const images = ["image1.jpg", "image2.jpg", "image3.jpg"];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: false,
  };

  if (images.length === 0) {
    return null;
  }

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
                {data?.writer?.profileImageUrl === null ? (
                  <img src={default_user} alt="default-img" />
                ) : (
                  <img src={data?.writer?.profileImageUrl} alt="profile-img" />
                )}
                <span className={styles.user_name}>
                  {data?.writer?.nickname}
                </span>
                <span className={styles.date}>・ {data?.createdAt}</span>
              </div>
              <div className={styles.title}>{data?.title}</div>
              <div className={styles.text_wrapper}>
                <div className={styles.content_text}>{data?.content}</div>
              </div>

              <div className={styles.imgWrapper}>
                {data?.petTalkPhotos ? (
                  <Slider {...settings}>
                    {data?.petTalkPhotos?.map(
                      (photo: PetTalkPhoto, index: number) => (
                        <div className={styles.content_img} key={index}>
                          <img src={photo.url} alt={`Image ${index + 1}`} />
                        </div>
                      )
                    )}
                  </Slider>
                ) : null}
              </div>

              <div className={styles.response_wrapper}>
                <div className={styles.icon_area}>
                  <img src={heart} alt="" />
                  <span>{data?.emoji}</span>
                </div>
                <div className={styles.icon_area}>
                  <img src={talk} alt="" />
                  <span>{data?.replyCount}</span>
                </div>
                <div className={styles.icon_area}>
                  <img src={view} alt="" />
                  <span>{data?.viewCount}</span>
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
                <div className={styles.img_area}>
                  <img
                    src={
                      selectedButton === index
                        ? emoji.imgSrc.replace("_off", "_on")
                        : emoji.imgSrc
                    }
                    alt={emoji.altText}
                  />
                </div>

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
            <span className={styles.count}>댓글 {data?.replyCount}개</span>
            <CommentItem />
            <CommentItem />
          </div>
          <div className={styles.replyWrite_wrapper}>
            {data?.writer?.profileImageUrl === null ? (
              <img src={default_user} alt="default-img" />
            ) : (
              <img src={data?.writer?.profileImageUrl} alt="profile-img" />
            )}
            <input
              type="text"
              placeholder="댓글을 작성해주세요"
              onFocus={handleInputFocus}
            />
          </div>
          {isModalOpen && <LoginModal />}
        </div>
      </Background>
    </>
  );
};
export default PetTalkDetail;

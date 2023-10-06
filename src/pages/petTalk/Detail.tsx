import Background from "@/components/Background";
import styles from "@/styles/pettalkdetail.module.scss";
import { useState } from "react";
import Slider from "react-slick";
import { useNavigate, useParams } from "react-router-dom";
import { emojiPost, emojiDelete, replyPost } from "@/lib/apis/pettalkApi";
import { usePettalkDetail, usePettalkReply } from "@/lib/hooks/pettalkList";
import { formatDate } from "@/utils/DateFormat";
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
import { useForm } from "react-hook-form";

const PetTalkDetail = () => {
  const navigate = useNavigate();
  const { petTalkId } = useParams();

  const [selectedButtons, setSelectedButtons] = useState<number[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [replyContent, setReplyContent] = useState("");

  const { data } = usePettalkDetail(Number(petTalkId));
  const { refetch: totalEmojiRefetch } = usePettalkDetail(Number(petTalkId));
  const { data: replyData, refetch: replyRefetch } = usePettalkReply(
    Number(petTalkId)
  );

  console.log(replyData);
  const onClickBack = () => {
    navigate(-1);
  };

  const handleEmojiClick = async (index: number, emojiType: string) => {
    try {
      // 이미 선택된 이모지인 경우에는 삭제 API를 호출
      if (selectedButtons.includes(index)) {
        await emojiDelete({
          petTalkId: Number(petTalkId),
          emojiType,
        });
      } else {
        // 선택되지 않은 경우에는 추가 API를 호출
        await emojiPost({
          petTalkId: Number(petTalkId),
          emojiType,
        });
      }

      //이모지 개수 카운트
      setSelectedButtons((prevSelectedButtons) => {
        if (prevSelectedButtons.includes(index)) {
          return prevSelectedButtons.filter((item) => item !== index);
        } else {
          return [...prevSelectedButtons, index];
        }
      });

      totalEmojiRefetch();
    } catch (error) {
      console.error("이모지 응답 실패:", error);
    }
  };

  const handleInputFocus = () => {
    const isLoggedIn = false;
    if (!isLoggedIn) {
      setIsModalOpen(true);
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: false,
  };

  const emojiData = [
    {
      emojiType: "CUTE",
      imgSrc: cute_off,
      altText: "귀여워요",
      text: "귀여워요",
    },
    { emojiType: "FUN", imgSrc: funny_off, altText: "웃겨요", text: "웃겨요" },
    { emojiType: "KISS", imgSrc: kiss_off, altText: "뽀뽀", text: "뽀뽀" },
    { emojiType: "OMG", imgSrc: surprise_off, altText: "헉", text: "헉" },
    { emojiType: "SAD", imgSrc: sad_off, altText: "슬퍼요", text: "슬퍼요" },
  ];

  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid, errors },
  } = useForm();

  const onVaild = async (data: any) => {
    const content = data.reply;
    try {
      await replyPost({
        petTalkId: Number(petTalkId),
        content,
      });
      replyRefetch();
      reset();
    } catch (error) {
      console.error("댓글 작성 실패:", error);
    }
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
                {data?.writer?.profileImageUrl === null ? (
                  <img src={default_user} alt="default-img" />
                ) : (
                  <img src={data?.writer?.profileImageUrl} alt="profile-img" />
                )}
                <span className={styles.user_name}>
                  {data?.writer?.nickname}
                </span>
                <span className={styles.date}>
                  ・ {formatDate(data?.createdAt)}
                </span>
              </div>
              <div className={styles.title}>{data?.title}</div>
              <div className={styles.text_wrapper}>
                <div className={styles.content_text}>{data?.content}</div>
              </div>

              {data?.petTalkPhotos ? (
                <div className={styles.imgWrapper}>
                  <Slider {...settings}>
                    {data?.petTalkPhotos?.map(
                      (photo: PetTalkPhoto, index: number) => (
                        <div className={styles.content_img} key={index}>
                          <img src={photo.url} alt={`Image ${index + 1}`} />
                        </div>
                      )
                    )}
                  </Slider>
                </div>
              ) : null}

              <div className={styles.response_wrapper}>
                <div className={styles.icon_area}>
                  <img src={heart} alt="" />
                  <span>{data?.emoji.totalEmojiCount}</span>
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
                  selectedButtons.includes(index) ? styles.selected : ""
                }`}
                onClick={() => handleEmojiClick(index, emoji.emojiType)}
              >
                <div className={styles.img_area}>
                  <img
                    src={
                      selectedButtons.includes(index)
                        ? emoji.imgSrc.replace("_off", "_on")
                        : emoji.imgSrc
                    }
                    alt={emoji.altText}
                  />
                </div>

                <span
                  style={{
                    fontWeight: selectedButtons.includes(index) ? 600 : 400,
                    color: selectedButtons.includes(index) ? "black" : "gray",
                  }}
                >
                  {emoji.text}
                </span>
              </button>
            ))}
          </div>
          <div className={styles.reply_wrapper}>
            <span className={styles.count}>댓글 {replyData?.length}개</span>
            {replyData && (
              <>
                <CommentItem
                  parentId={replyData?.replyId}
                  userName={replyData?.writer?.nickname}
                />
              </>
            )}
          </div>

          <form onSubmit={handleSubmit(onVaild)}>
            <div className={styles.replyWrite_wrapper}>
              {data?.writer?.profileImageUrl === null ? (
                <img src={default_user} alt="default-img" />
              ) : (
                <img src={data?.writer?.profileImageUrl} alt="profile-img" />
              )}
              <input
                {...register("reply", { required: true, maxLength: 100 })}
                type="text"
                placeholder="댓글을 작성해주세요"
                onFocus={handleInputFocus}
                value={replyContent}
                onChange={(e) => setReplyContent(e.target.value)}
              />

              <button
                style={{
                  cursor: isValid ? "pointer" : "not-allowed",
                  backgroundColor: isValid ? "#FFD262" : "#EAEAEA",
                }}
                disabled={!isValid}
              >
                {">"}
              </button>
              {errors?.reply?.type === "maxLength" ? (
                <span>100자 이내로 입력하세요.</span>
              ) : null}
            </div>
          </form>
          {isModalOpen && <LoginModal />}
        </div>
      </Background>
    </>
  );
};
export default PetTalkDetail;

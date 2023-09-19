import Background from "@/components/Background";
import styles from "@/styles/pettalkdetail.module.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Head from "@/components/Head";
import heart from "../../assets/heart_18px.svg";
import talk from "../../assets/talk_18px.svg";
import view from "../../assets/view_18px.svg";
import cute_off from "../../assets/Cute_off.png";
// import cute_on from "../../assets/Cute_on.png";

import { AiOutlineLeft } from "react-icons/ai";

const PetTaliDetail = () => {
  const navigate = useNavigate();

  const onClickBack = () => {
    navigate(-1);
  };

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
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

          <div className={styles.emoji_wrapper}>
            <button className={styles.emoji_item}>
              <img src={cute_off} alt="" />
              <span>귀여워요</span>
            </button>
            <button className={styles.emoji_item}>
              <img src={cute_off} alt="" />
              <span>귀여워요</span>
            </button>
            <button className={styles.emoji_item}>
              <img src={cute_off} alt="" />
              <span>귀여워요</span>
            </button>
            <button className={styles.emoji_item}>
              <img src={cute_off} alt="" />
              <span>귀여워요</span>
            </button>
            <button className={styles.emoji_item}>
              <img src={cute_off} alt="" />
              <span>귀여워요</span>
            </button>
          </div>

          <div className={styles.reply_wrapper}>
            {/* 댓글 ${count}개 */}
            <span className={styles.count}>{`댓글 42`}</span>
            <div className={styles.item}>
              <div className={styles.user_info}>
                <img src="" alt="profile" />
                <span className={styles.name}>닉네임</span>
                <span className={styles.date}>・ 작성 날짜</span>
              </div>

              <div className={styles.item_content}>
                <span
                  className={
                    isExpanded ? styles.expandedText : styles.collapsedText
                  }
                >
                  강아지 온 몸 피부에 올라오고 많이 긁어요 ㅠ ㅠ 텍 스트는
                  두줄까지 가능가능 강아지 온 몸 피부에 올라오고 많이
                  긁어요ㅠㅠㅠ 텍스트는 두줄까지 가능가능
                </span>
                {isExpanded || (
                  <button
                    className={styles.expandButton}
                    onClick={toggleExpand}
                  >
                    ...더보기
                  </button>
                )}
                <button className={styles.reReply}>대댓글 달기</button>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.user_info}>
                <img src="" alt="profile" />
                <span className={styles.name}>닉네임</span>
                <span className={styles.date}>・ 작성 날짜</span>
              </div>

              <div className={styles.item_content}>
                <span
                  className={
                    isExpanded ? styles.expandedText : styles.collapsedText
                  }
                >
                  강아지 온 몸 피부에 올라오고 많이 긁어요 ㅠ ㅠ 텍 스트는
                  두줄까지 가능가능 강아지 온 몸 피부에 올라오고 많이
                  긁어요ㅠㅠㅠ 텍스트는 두줄까지 가능가능
                </span>
                {isExpanded || (
                  <button
                    className={styles.expandButton}
                    onClick={toggleExpand}
                  >
                    ...더보기
                  </button>
                )}
                <button className={styles.reReply}>대댓글 달기</button>
              </div>
            </div>
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
export default PetTaliDetail;

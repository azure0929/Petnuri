import MainTab from "@/components/MainTab";
import Background from "@/components/Background";
import styles from "@/styles/pettalk.module.scss";
import { Link, useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";
import { activeTabState } from "../../store/petTalkState";
import { useEffect } from "react";

import { Select, Space } from "antd";

const PetTalk = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useRecoilState(activeTabState);

  useEffect(() => {
    if (location.pathname === "/petTalk") {
      setActiveTab("전체");
    } else if (location.pathname === "/concern") {
      setActiveTab("고민상담");
    } else if (location.pathname === "/freetalk") {
      setActiveTab("자유수다");
    }
  }, [location.pathname, setActiveTab]);
  return (
    <>
      <Background>
        <div className={styles.headTab}>
          <Link
            to="/petTalk"
            className={`${styles.head_item} ${
              activeTab === "전체" ? styles.active : ""
            }`}
          >
            전체
          </Link>
          <Link
            to="/concern"
            className={`${styles.head_item} ${
              activeTab === "고민상담" ? styles.active : ""
            }`}
          >
            고민상담
          </Link>
          <Link
            to="/freetalk"
            className={`${styles.head_item} ${
              activeTab === "자유수다" ? styles.active : ""
            }`}
          >
            자유수다
          </Link>
        </div>
        <div className={styles.content_wrapper}>
          <div className={styles.select_wrap}>
            <Space wrap>
              <Select
                size="large"
                defaultValue="강아지"
                bordered={false}
                options={[
                  { value: "강아지", label: "강아지" },
                  { value: "고양이", label: "고양이" },
                ]}
              />
            </Space>
          </div>

          <div className={styles.banner}>
            프로모션 배너
            <img src="" alt="프로모션 배너" />
          </div>

          <div className={styles.select_wrap}>
            <Space wrap>
              <Select
                size="middle"
                defaultValue="인기순"
                bordered={false}
                style={{ margin: 0 }}
                options={[
                  { value: "인기순", label: "인기순" },
                  { value: "최신순", label: "최신순" },
                ]}
              />
            </Space>
          </div>

          <div className={styles.talk_item}>
            <div className={styles.user_info}>
              <img src="" alt="profile-img" />
              <span className={styles.user_name}>닉네임</span>
              <span className={styles.today_date}>・ 오늘 날짜 넣기</span>
            </div>
            <div className={styles.title}>제목 텍스트 입니다.</div>
            <div className={styles.content_text}>
              꿍이가 아파요 어뜩하죠ㅠㅠ 꿍이가 아파요 어뜩하죠ㅠㅠ 꿍이가
              아파요 어뜩하죠ㅠㅠ 꿍이가 아파요 어뜩하죠ㅠㅠ 꿍이가 아파요
              어뜩하죠ㅠㅠ 꿍이가 아파요 어뜩하죠ㅠㅠ 꿍이가 아파요 어뜩하죠ㅠㅠ
            </div>
            <button className={styles.plus_button}>더보기</button>
            <div className={styles.content_img}>
              예시 이미지
              <img src="" alt="예시이미지" />
            </div>
            <div className={styles.response_wrapper}>
              <div>좋아요</div>
              <div>댓글</div>
              <div>조회수</div>
            </div>
          </div>
        </div>
      </Background>

      <MainTab />
    </>
  );
};
export default PetTalk;

import MainTab from "@/components/MainTab";
import Background from "@/components/Background";
import styles from "@/styles/pettalk.module.scss";
import { Link, useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";
import { activeTabState } from "../../store/petTalkState";
import Head from "@/components/Head";
import { useEffect, useState } from "react";
import heart from "../../assets/heart_18px.svg";
import talk from "../../assets/talk_18px.svg";
import view from "../../assets/view_18px.svg";
import floating from "../../assets/X.png";
import concern_icon from "../../assets/concerns_icon.svg";
import freetalk_icon from "../../assets/freetalk_icon.svg";

const PetTalk = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useRecoilState(activeTabState);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleFloating = () => {
    console.log("플로팅 버튼!");
    setIsMenuOpen(!isMenuOpen);
  };

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
        <div className={styles.pettalk_area}>
          <Head>
            <div className={styles.headTab}>
              <div className={styles.head_menu}>
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
            </div>
          </Head>

          <div className={styles.content_wrapper}>
            <div className={styles.select_wrap}>
              <select className={styles.select_pet} name="강아지">
                <option value="강아지">강아지</option>
                <option value="고양이">고양이</option>
              </select>
            </div>

            <div className={styles.banner}>
              <img src="" alt="프로모션 배너" />
            </div>

            <div className={styles.select_wrap}>
              <select className={styles.select_sort} name="인기순">
                <option value="인기순">인기순</option>
                <option value="최신순">최신순</option>
              </select>
            </div>

            <div className={styles.talk_list}>
              <div className={styles.border}>
                {/* item 클릭하면 상세페이지 연결 추가하기 */}
                <div className={styles.item}>
                  <div className={styles.user_info}>
                    <img src="" alt="profile-img" />
                    <span className={styles.user_name}>닉네임</span>
                    <span className={styles.today_date}>
                      ・ 게시된 날짜 넣기
                    </span>
                  </div>
                  <div className={styles.title}>제목 텍스트 입니다.</div>
                  <div className={styles.text_wrapper}>
                    <div className={styles.content_text}>
                      꿍이가 아파요 어뜩하죠ㅠㅠ 꿍이가 아파요 어뜩하죠ㅠㅠ
                      꿍이가 아파요 어뜩하죠ㅠㅠ 꿍이가 아파요 어뜩하죠ㅠㅠ
                      꿍이가 아파요 어뜩하죠ㅠㅠ 꿍이가 아파요 어뜩하죠ㅠㅠ
                      꿍이가 아파요 어뜩하죠ㅠㅠ
                    </div>
                    <button className={styles.plus_button}>더보기</button>
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
              <div className={styles.border}>
                <div className={styles.item}>
                  <div className={styles.user_info}>
                    <img src="" alt="profile-img" />
                    <span className={styles.user_name}>닉네임</span>
                    <span className={styles.today_date}>
                      ・ 게시된 날짜 넣기
                    </span>
                  </div>
                  <div className={styles.title}>제목 텍스트 입니다.</div>
                  <div className={styles.text_wrapper}>
                    <div className={styles.content_text}>
                      꿍이가 아파요 어뜩하죠ㅠㅠ 꿍이가 아파요 어뜩하죠ㅠㅠ
                      꿍이가 아파요 어뜩하죠ㅠㅠ 꿍이가 아파요 어뜩하죠ㅠㅠ
                      꿍이가 아파요 어뜩하죠ㅠㅠ 꿍이가 아파요 어뜩하죠ㅠㅠ
                      꿍이가 아파요 어뜩하죠ㅠㅠ
                    </div>
                    <button className={styles.plus_button}>더보기</button>
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

              <div className={styles.border}>
                <div className={styles.item}>
                  <div className={styles.user_info}>
                    <img src="" alt="profile-img" />
                    <span className={styles.user_name}>닉네임</span>
                    <span className={styles.today_date}>
                      ・ 게시된 날짜 넣기
                    </span>
                  </div>
                  <div className={styles.title}>제목 텍스트 입니다.</div>
                  <div className={styles.text_wrapper}>
                    <div className={styles.content_text}>
                      꿍이가 아파요 어뜩하죠ㅠㅠ 꿍이가 아파요 어뜩하죠ㅠㅠ
                      꿍이가 아파요 어뜩하죠ㅠㅠ 꿍이가 아파요 어뜩하죠ㅠㅠ
                      꿍이가 아파요 어뜩하죠ㅠㅠ 꿍이가 아파요 어뜩하죠ㅠㅠ
                      꿍이가 아파요 어뜩하죠ㅠㅠ
                    </div>
                    <button className={styles.plus_button}>더보기</button>
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
            </div>

            <div
              className={`${styles.modal_backdrop} ${
                isMenuOpen ? styles.active : ""
              }`}
            />
            <button
              className={`${styles.floating} ${
                isMenuOpen ? styles.active : ""
              }`}
              onClick={handleFloating}
            >
              <img src={floating} alt="" />
            </button>
            {isMenuOpen && (
              <div className={styles.menu}>
                <button className={styles.item}>
                  <img src={concern_icon} alt="" />
                  <span>고민상담</span>
                </button>
                <button className={styles.item}>
                  <img src={freetalk_icon} alt="" />
                  <span>자유수다</span>
                </button>
              </div>
            )}
          </div>
          <MainTab />
        </div>
      </Background>
    </>
  );
};
export default PetTalk;

import MainTab from "@/components/MainTab";
import Background from "@/components/Background";
import styles from "@/styles/pettalk.module.scss";
import { Link, useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import { useRecoilState } from "recoil";
import { activeTabState } from "../../store/petTalkState";
import { concernList } from "@/lib/apis/pettalkApi";
import Head from "@/components/Head";
import { useEffect, useState } from "react";
import { useScrollDiv } from "@/utils/Scroll";
import heart from "../../assets/heart_18px.svg";
import talk from "../../assets/talk_18px.svg";
import view from "../../assets/view_18px.svg";
import floating from "../../assets/X.png";
import concern_icon from "../../assets/concerns_icon.svg";
import freetalk_icon from "../../assets/freetalk_icon.svg";
import default_user from "../../assets/user.png";

const Concern = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useRecoilState(activeTabState);
  const [selectedPet, setSelectedPet] = useState("DOG");
  const [subCategory, setSubCategory] = useState(1);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollRef = useScrollDiv();

  const handleFloating = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handlePetSelect = (e: { target: { value: string } }) => {
    const selectedValue = e.target.value;
    setSelectedPet(selectedValue);

    if (selectedValue === "DOG") {
      concernList("DOG", 1, 1);
    } else if (selectedValue === "CAT") {
      concernList("CAT", 1, 1);
    }
  };

  const mapTabToNumber = (tabName: string) => {
    switch (tabName) {
      case "전체":
        return 0;
      case "고민상담":
        return 1;
      case "자유수다":
        return 2;
      default:
        return 0;
    }
  };

  const { data, refetch } = useQuery("queryKey", () =>
    concernList(selectedPet, mapTabToNumber(activeTab), subCategory)
  );

  const handleSubCategorySelect = (subCategory: number) => {
    setSubCategory(subCategory);
    refetch();
  };

  if (data) {
    console.log(`${selectedPet}, ${activeTab}, ${subCategory}`, data);
  }

  useEffect(() => {
    if (location.pathname === "/petTalk") {
      setActiveTab("전체");
    } else if (location.pathname === "/petTalk/concern") {
      setActiveTab("고민상담");
    } else if (location.pathname === "/petTalk/freetalk") {
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
                    activeTab === "전체" ? styles.tab_active : ""
                  }`}
                >
                  전체
                </Link>
                <Link
                  to="/petTalk/concern"
                  className={`${styles.head_item} ${
                    activeTab === "고민상담" ? styles.tab_active : ""
                  }`}
                >
                  고민상담
                </Link>
                <Link
                  to="/petTalk/freetalk"
                  className={`${styles.head_item} ${
                    activeTab === "자유수다" ? styles.tab_active : ""
                  }`}
                >
                  자유수다
                </Link>
              </div>
            </div>
          </Head>

          <div className={styles.content_wrapper}>
            <div className={styles.category_container}>
              <div className={styles.category_wrapper} ref={scrollRef}>
                <button
                  className={subCategory === 1 ? styles.active_button : ""}
                  onClick={() => handleSubCategorySelect(1)}
                >
                  질병/질환
                </button>
                <button
                  className={subCategory === 2 ? styles.active_button : ""}
                  onClick={() => handleSubCategorySelect(2)}
                >
                  미용/패션
                </button>
                <button
                  className={subCategory === 3 ? styles.active_button : ""}
                  onClick={() => handleSubCategorySelect(3)}
                >
                  교육/훈련
                </button>
                <button
                  className={subCategory === 4 ? styles.active_button : ""}
                  onClick={() => handleSubCategorySelect(4)}
                >
                  양육/관리
                </button>
                <button
                  className={subCategory === 5 ? styles.active_button : ""}
                  onClick={() => handleSubCategorySelect(5)}
                >
                  반려용품
                </button>
              </div>
            </div>

            <div className={styles.select_wrap}>
              <select
                className={styles.select_pet}
                name="강아지"
                value={selectedPet}
                onChange={handlePetSelect}
              >
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
              {data && data.length > 0
                ? data.map((item: PetTalkItem) => (
                    <div className={styles.border} key={item.id}>
                      <Link to={`/petTalk/${item.id}`}>
                        <div className={styles.item}>
                          <div className={styles.user_info}>
                            {item.writer.profileImageUrl === null ? (
                              <img src={default_user} alt="default-img" />
                            ) : (
                              <img
                                src={item.writer.profileImageUrl}
                                alt="profile-img"
                              />
                            )}
                            <span className={styles.user_name}>
                              {item.writer.nickname}
                            </span>
                            <span className={styles.date}>
                              ・ 게시된 날짜 넣기 {item.id}
                            </span>
                          </div>
                          <div className={styles.title}>{item.title}</div>
                          <div className={styles.text_wrapper}>
                            <div className={styles.content_text}>
                              {item.content}
                            </div>
                            <button className={styles.plus_button}>
                              더보기
                            </button>
                          </div>

                          {item.thumbnail === null ? null : (
                            <div className={styles.content_img}>
                              <img src="" alt="예시이미지" />
                            </div>
                          )}

                          <div className={styles.response_wrapper}>
                            <div className={styles.icon_area}>
                              <img src={heart} alt="" />
                              <span>{item.emojiCount}</span>
                            </div>
                            <div className={styles.icon_area}>
                              <img src={talk} alt="" />
                              <span>{item.replyCount}</span>
                            </div>
                            <div className={styles.icon_area}>
                              <img src={view} alt="" />
                              <span>{item.viewCount}</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))
                : null}
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
                <Link to="/petTalk/concernwrite">
                  <button className={styles.item}>
                    <img src={concern_icon} alt="" />
                    <span>고민상담</span>
                  </button>
                </Link>
                <Link to="/petTalk/freetalkwrite">
                  <button className={styles.item}>
                    <img src={freetalk_icon} alt="" />
                    <span>자유수다</span>
                  </button>
                </Link>
              </div>
            )}
          </div>
          <MainTab />
        </div>
      </Background>
    </>
  );
};
export default Concern;

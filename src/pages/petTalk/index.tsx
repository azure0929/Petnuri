import MainTab from "@/components/MainTab";
import Background from "@/components/Background";
import styles from "@/styles/pettalk.module.scss";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { activeTabState } from "@/store/petTalkState";
import { useAllList } from "@/lib/hooks/pettalkList";
import { formatDate } from "@/utils/DateFormat";
import Head from "@/components/Head";
import { SetStateAction, useState } from "react";
import heart from "@/assets/heart_18px.svg";
import talk from "@/assets/talk_18px.svg";
import view from "@/assets/view_18px.svg";
import floating from "@/assets/X.png";
import concern_icon from "@/assets/concerns_icon.svg";
import freetalk_icon from "@/assets/freetalk_icon.svg";
import default_user from "@/assets/user.png";
import banner from "@/assets/키트배너.png";

const PetTalk = () => {
  const [activeTab, setActiveTab] = useRecoilState(activeTabState);
  const [selectedPet, setSelectedPet] = useState("DOG");

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleFloating = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handlePetSelect = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    const selectedValue = e.target.value;
    setSelectedPet(selectedValue);

    if (selectedValue === "DOG") {
      setSelectedPet("DOG");
    } else if (selectedValue === "CAT") {
      setSelectedPet("CAT");
    }
  };

  const { data } = useAllList(selectedPet);
  console.log("모든리스트", data);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

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
                  onClick={() => handleTabChange("전체")}
                >
                  전체
                </Link>
                <Link
                  to="/petTalk/concern"
                  className={`${styles.head_item} ${
                    activeTab === "고민상담" ? styles.tab_active : ""
                  }`}
                  onClick={() => {
                    handleTabChange("고민상담");
                    setActiveTab("고민상담");
                  }}
                >
                  고민상담
                </Link>
                <Link
                  to="/petTalk/freetalk"
                  className={`${styles.head_item} ${
                    activeTab === "자유수다" ? styles.tab_active : ""
                  }`}
                  onClick={() => {
                    handleTabChange("자유수다");
                    setActiveTab("자유수다");
                  }}
                >
                  자유수다
                </Link>
              </div>
            </div>
          </Head>

          <div className={styles.content_wrapper}>
            <div className={styles.select_wrap}>
              <select
                className={styles.select_pet}
                name="강아지"
                value={selectedPet}
                onChange={handlePetSelect}
              >
                <option value="DOG">강아지</option>
                <option value="CAT">고양이</option>
              </select>
            </div>

            <div className={styles.banner}>
              <img src={banner} alt="프로모션 배너" />
            </div>

            <div className={styles.select_wrap}>
              <select className={styles.select_sort} name="인기순">
                <option value="인기순">인기순</option>
                <option value="최신순">최신순</option>
              </select>
            </div>

            <div className={styles.talk_list}>
              {data?.map((item: PetTalkItem) => (
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
                          ・ {formatDate(item.createdAt)}
                        </span>
                      </div>
                      <div className={styles.title}>{item.title}</div>
                      <div className={styles.text_wrapper}>
                        <div className={styles.content_text}>
                          {item.content}
                        </div>
                        <button className={styles.plus_button}>더보기</button>
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
              ))}
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
export default PetTalk;

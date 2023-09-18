import MainTab from "@/components/MainTab";
import Background from "@/components/Background";
import { useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import styles from "@/styles/home.module.scss";
import KitModal from "@/components/modal/KitModal";
import { useSetRecoilState } from "recoil";
import { bottomSheetState } from "@/store/challengeState";
import { useScrollUl } from "@/utils/Scroll";
import { useState,useEffect } from 'react'

const Home = () => {
  const setBottomIsOpen = useSetRecoilState(bottomSheetState);
  const scrollRef = useScrollUl()
  const [petTalkList, setPetTalkList] = useState<PetTalkMainPage[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/PettalkMain.json');
        const data = await response.json();
        setPetTalkList(data.data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
   }, []);

  const navigate = useNavigate();

  const onChallenge = () => {
    navigate(`challenge`)
  }

  const onPettalk = () => {
    navigate(`PetTalk`)
  }

  const onPetProfileAdd = () => {
    navigate(`petprofileadd`)
  }

  const onPetProfileModify = () => {
    navigate(`petprofilemodify`)
  }

  return (
    <>
      <Background>
        <div className={styles.head}>
          <span>홈</span>
        </div>
        <div className={styles.contents}>
          <div className={styles.profile}>
            <div className={styles.tabmenu}>
              {/* <div></div> */}
              <div role="button" className={styles.add} onClick={onPetProfileAdd}>
                <div className={styles.icon}></div>
                <span>추가하기</span>
              </div>
            </div>
            <div className={styles.detail}>
              <div className={styles.photo}></div>
              <div className={styles.name}>
                <h3>익명의 집사</h3>
                <div role="button" onClick={onPetProfileModify}>수정하기</div>
              </div>
            </div>
          </div>
          <div className={styles.recommend}>
            <div className={styles.title}>
              <h3>추천 챌린지</h3>
              <div role="button" onClick={onChallenge}>더보기</div>
            </div>
            <ul className={styles.list} ref={scrollRef} >
              <li>
                <div className={styles.photo}></div>
                <div className={styles.desc}>
                  <span>랜선대회 챌린지</span>
                  <p>카드 디자인 서브 타이틀 카드 디자인 서브</p>
                </div>
              </li>
              <li>
                <div className={styles.photo}></div>
                <div className={styles.desc}>
                  <span>대규모 챌린지</span>
                  <p>카드 디자인 서브 타이틀 카드 디자인 서브</p>
                </div>
              </li>
              <li>
                <div className={styles.photo}></div>
                <div className={styles.desc}>
                  <span>알파</span>
                  <p>카드 디자인 서브 타이틀 카드 디자인 서브</p>
                </div>
              </li>
            </ul>
          </div>
          <div className={styles.hot}>
            <div className={styles.title}>
              <h3>펫톡 인기글</h3>
              <div role="button" onClick={onPettalk}>더보기</div>
            </div>
            <ul className={styles.list}>
              {petTalkList.slice(0, 4).map((item) => {
                const date = new Date(item.createdAt);
                const hours = ("0" + date.getHours()).slice(-2);
                const minutes = ("0" + date.getMinutes()).slice(-2);

                return (
                  <li key={item.petTalkId.toString()}>
                    <div className={styles.content}>
                      <img src={item.thumbnail} className={styles.photo} alt="thumbnail" />
                      <div className={styles.detail}>
                        <div className={styles.info}>
                          <span>{item.title}</span>
                        </div>
                        <div className={styles.user}>
                          <span>{item.writer.nickname}</span>
                          <span>&#183;</span>
                          <p>{`${hours}:${minutes}`}</p> 
                        </div>
                      </div>
                      <div className={styles.icon}><IoIosArrowForward /></div>
                    </div>
                  </li>)
              })}
            </ul> 
          </div>
          
          <div className={styles.kit}>
            <div className={styles.title}> 검진 키트 결과 보기 </div>
            <div className={styles.image} onClick={() => setBottomIsOpen(true)}>
              커밍순
            </div>
          </div>   
        </div>
        <KitModal/> 
      </Background>
      <MainTab />
    </>
  );
};
export default Home;

import MainTab from "@/components/MainTab";
import Background from "@/components/Background";
import { useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import styles from "@/styles/home.module.scss";
import KitModal from "@/components/modal/KitModal";
import HomeEventList from "@/components/HomeEventList";
import { useSetRecoilState } from "recoil";
import { bottomSheetState } from "@/store/challengeState";
import { useScrollUl } from "@/utils/Scroll";
import { useState,useEffect } from 'react'

const Home = () => {
  const setBottomIsOpen = useSetRecoilState(bottomSheetState);
  const scrollRef = useScrollUl()
  const [petTalkList, setPetTalkList] = useState<PetTalkMainPage[]>([]);
  const [daily, setDaily] = useState<ChallengeData>();
  const [cheonHa, setCheonHa] = useState<EventChallengeData>();
  const [yanado, setYanado] = useState<EventChallengeData>();
  const [petProfile, setPetProfile] = useState<HomePet[]>([])
  const [activePetName, setActivePetName] = useState<string | null>(null);
  const [selectedProfile, setSelectedProfile] = useState<HomePet | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response1 = await fetch('/PettalkMain.json');
      const data1 = await response1.json();
      setPetTalkList(data1.data);
      const response2 = await fetch('/Daily.json');
      const data2 = await response2.json();
      setDaily(data2.data[0]);
      const response3 = await fetch('/Cheonha.json');
      const data3 = await response3.json();
      setCheonHa(data3.data[0]);
      const response4 = await fetch('/Yanado.json');
      const data4 = await response4.json();
      setYanado(data4.data[0]);
      const response5 = await fetch('/HomePet.json');
      const data5 = await response5.json();
      setPetProfile(data5.data);
    };
    fetchData();
   }, []);

   useEffect(() => {
    // 선택한 펫을 active로 설정
    let selectedProfileFromList = petProfile.find(profile => profile.isSelected);
    // 선택된 펫이 없다면 첫 번째 펫을 선택
    if (!selectedProfileFromList && petProfile.length > 0) 
    selectedProfileFromList = petProfile[0];
     
    if (selectedProfileFromList) {
      setActivePetName(selectedProfileFromList.name);
      setSelectedProfile(selectedProfileFromList); // 첫 렌더링 시 선택된 프로필 설정
    }
  }, [petProfile]);

  // 클릭한 펫 이름으로 active 상태 변경
  const handleItemClick = (name: string) => {
    setActivePetName(name);
    setSelectedProfile(petProfile.find(profile => profile.name === name) || null);
  }

  const navigate = useNavigate();
  const onChallenge = () => navigate(`challenge`)
  const onYanado = () => navigate(`ecyanado`)
  const onCheonHa = () => navigate(`contest`)
  const onDailyChallenge1 = () => navigate(`dailychallenge1`)
  const onPettalk = () => navigate(`PetTalk`)
  const onPetProfileAdd = () => navigate(`petprofileadd`)
  const onPetProfileModify = () => navigate(`petprofilemodify`, { state: { profile: selectedProfile } })

  return (
    <>
      <Background>
        <div className={styles.head}>
          <span>홈</span>
        </div>
        <div className={styles.contents}>
          <div className={styles.profile}>
            <div className={styles.tabmenu}>
              {petProfile.map((profile) =>
                <div 
                  key={profile.name} 
                  onClick={() => handleItemClick(profile.name)}
                  className={activePetName === profile.name ? styles.active : styles.add}
                >
                  <img src={profile.image} alt="" className={styles.icon}/>
                  <span>{profile.name}</span>
                </div>
              )}
              {petProfile.length < 3 && (
                <div role="button" className={styles.add} onClick={onPetProfileAdd}>
                  <div className={styles.icon}></div>
                  <span>추가하기</span>
                </div>
              )}
            </div>
            <div className={styles.detail}>
              {selectedProfile && (
              <div className={styles.info}>
                <img src={selectedProfile?.image} alt="" className={styles.photo}/>
                <div className={styles.nga}>
                  <span className={styles.name}>{selectedProfile?.name}</span>
                  <span className={styles.gender}> · {selectedProfile?.gender}</span>
                  <span className={styles.age}>({selectedProfile?.age}세)</span>
                </div>
                <div className={styles.modify} onClick={onPetProfileModify}>수정하기</div>
              </div>
            )}
            </div>
          </div>
          <div className={styles.recommend}>
            <div className={styles.title}>
              <h3>추천 챌린지</h3>
              <div role="button" onClick={onChallenge}>더보기</div>
            </div>
            <ul className={styles.list} ref={scrollRef} >
              <HomeEventList item={daily} onClick={onDailyChallenge1} />
              <HomeEventList item={cheonHa} onClick={onCheonHa} />
              <HomeEventList item={yanado} onClick={onYanado} />
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

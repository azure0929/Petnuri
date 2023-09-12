import MainTab from "@/components/MainTab";
import Background from "@/components/Background";
import { IoIosArrowForward } from "react-icons/io";
import styles from "@/styles/home.module.scss";

const Home = () => {
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
              <div role="button" className={styles.add}>
                <div className={styles.icon}></div>
                <span>추가하기</span>
              </div>
            </div>
            <div className={styles.detail}>
              <div className={styles.photo}></div>
              <div className={styles.name}>
                <h3>익명의 집사</h3>
                <div role="button">수정하기</div>
              </div>
            </div>
          </div>
          <div className={styles.recommend}>
            <div className={styles.title}>
              <h3>추천 챌린지</h3>
              <div role="button">더보기</div>
            </div>
            <ul className={styles.list}>
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
              <div role="button">더보기</div>
            </div>
            <ul className={styles.list}>
              <li>
                <div className={styles.content}>
                  <div className={styles.photo}></div>
                  <div className={styles.detail}>
                    <div className={styles.info}>
                      <span>커뮤니티 텍스트 제목입니다. 커뮤니티 텍스트</span>
                    </div>
                    <div className={styles.user}>
                      <span>닉네임</span>
                      <span>&#183;</span>
                      <p><span>8</span>시간전</p>
                    </div>
                  </div>
                  <div className={styles.icon}><IoIosArrowForward /></div>
                </div>
              </li>
              <li>
                <div className={styles.content}>
                  <div className={styles.photo}></div>
                  <div className={styles.detail}>
                    <div className={styles.info}>
                      <span>커뮤니티 텍스트 제목입니다. 커뮤니티 텍스트</span>
                    </div>
                    <div className={styles.user}>
                      <span>닉네임</span>
                      <span>&#183;</span>
                      <p><span>8</span>시간전</p>
                    </div>
                  </div>
                  <div className={styles.icon}><IoIosArrowForward /></div>
                </div>
              </li>
              <li>
                <div className={styles.content}>
                  <div className={styles.photo}></div>
                  <div className={styles.detail}>
                    <div className={styles.info}>
                      <span>커뮤니티 텍스트 제목입니다. 커뮤니티 텍스트</span>
                    </div>
                    <div className={styles.user}>
                      <span>닉네임</span>
                      <span>&#183;</span>
                      <p><span>8</span>시간전</p>
                    </div>
                  </div>
                  <div className={styles.icon}><IoIosArrowForward /></div>
                </div>
              </li>
              <li>
                <div className={styles.content}>
                  <div className={styles.photo}></div>
                  <div className={styles.detail}>
                    <div className={styles.info}>
                      <span>커뮤니티 텍스트 제목입니다. 커뮤니티 텍스트</span>
                    </div>
                    <div className={styles.user}>
                      <span>닉네임</span>
                      <span>&#183;</span>
                      <p><span>8</span>시간전</p>
                    </div>
                  </div>
                  <div className={styles.icon}><IoIosArrowForward /></div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Background>
      <MainTab />
    </>
  );
};
export default Home;

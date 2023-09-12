import Background from "@/components/Background";
import MainTab from "@/components/MainTab";
import styles from "@/styles/eventchallenge.module.scss";
import JoinButton from "./JoinButton";

interface EventChallengeProps {
  eventchallenges: challenge;
}

const EventChallenge: React.FC<EventChallengeProps> = ({ eventchallenges }) => {
  return (
    <>
      <Background>
        <div className={styles.head}>
          <span>이벤트 챌린지</span>
        </div>
        <div className={styles.bannerImg}>배너 이미지</div>
        <div className={styles.title}>
          <span className={styles.mainTitle}>{eventchallenges.mainTitle}</span>
          <span className={styles.subTitle}>{eventchallenges.subTitle}</span>
        </div>
        <div className={styles.contents}>
          <div className={styles.how}>
            <span className={styles.howTitle}>{eventchallenges.howTitle}</span>
            <span className={styles.howInfo}>{eventchallenges.howInfo}</span>
          </div>
          <div className={styles.period}>
            <span className={styles.periodTitle}>
              {eventchallenges.periodTitle}
            </span>
            <span className={styles.periodInfo}>
              {eventchallenges.periodInfo}
            </span>
          </div>
          <div className={styles.point}>
            <span className={styles.pointTitle}>
              {eventchallenges.pointTitle}
            </span>
            <span className={styles.pointInfo}>
              {eventchallenges.pointInfo}
            </span>
          </div>
        </div>
        <div className={styles.participants}>
          <span className={styles.title}>
            {eventchallenges.participantsTitle}
          </span>
          <div className={styles.info}>
            <div className={styles.img}>{eventchallenges.participantsImg}</div>
            <div className={styles.name}>
              <span>{eventchallenges.participantsName}</span>
            </div>
          </div>
        </div>
        <JoinButton />
      </Background>
      <MainTab />
    </>
  );
};

export default EventChallenge;

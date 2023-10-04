import styles from "@/styles/challenge/challengebanner.module.scss";

interface bannerProps {
  banner: string;
}

const ChallengeBanner: React.FC<bannerProps> = ({ banner }) => {
  return (
    <>
      <div className={styles.bannerImg}>
        <img src={banner}></img>
      </div>
    </>
  );
};

export default ChallengeBanner;

import styles from "@/styles/challengebanner.module.scss";

interface bannerProps {
  banner: challengeBanner;
}

const ChallengeBanner: React.FC<bannerProps> = ({ banner }) => {
  return (
    <>
      <div className={styles.bannerImg}>{banner.bannerImg}</div>
    </>
  );
};

export default ChallengeBanner;

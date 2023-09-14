import styles from "@/styles/challengebanner.module.scss";

interface bannerProps {
  banner: challengeBanner;
}

const ChallengeBanner: React.FC<bannerProps> = ({ banner }) => {
  const handleDivClick = () => {
    window.open(banner.bannerImg, "_blank");
  };

  return (
    <>
      <div className={styles.bannerImg} onClick={handleDivClick}>
        asd
      </div>
    </>
  );
};

export default ChallengeBanner;

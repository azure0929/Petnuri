import styles from "@/styles/challenge/challengebanner.module.scss";

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
        <img src={banner.bannerImg}></img>
      </div>
    </>
  );
};

export default ChallengeBanner;

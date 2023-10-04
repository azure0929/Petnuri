import styles from '@/styles/challengeprofile.module.scss'
import credit from "@/assets/credit.svg";
import defaultImage from '@/assets/defaultImage.png'

const ChallengeProfile = () => {

  return (
    <>
      <div className={styles.name}>
        <img src={defaultImage} alt="" className={styles.img}/>
        <div className={styles.nickname}>꿍이집사</div>
      </div>
      <div className={styles.credit}>
        1220 크레딧
        <img src={credit} alt="credit" />
      </div>
    </>
  )
}

export default ChallengeProfile
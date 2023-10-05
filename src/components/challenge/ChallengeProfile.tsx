import styles from '@/styles/challengeprofile.module.scss'
import credit from "@/assets/credit.svg";
import defaultImage from '@/assets/defaultImage.png'
import { useState, useEffect } from 'react';
import { pointApi } from '@/lib/apis/challengeApi';

const ChallengeProfile = () => {
  const [point, setPoint] = useState()

  useEffect(() => {
    const fetchData = async () => {
      const data = await pointApi()
      setPoint(data);
    };
    fetchData();
  }, []);

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
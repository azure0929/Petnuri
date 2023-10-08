import styles from '@/styles/challengeprofile.module.scss'
import credit from "@/assets/credit.svg";
import defaultImage from '@/assets/defaultImage.png'
import { useState, useEffect } from 'react';
import { pointApi } from '@/lib/apis/challengeApi';
import { getCookie } from '@/utils/Cookie';

const ChallengeProfile = () => {
  const [point, setPoint] = useState({nickname: '비회원', havePoint: 0, profileImageUrl: defaultImage})
  const token = getCookie('jwtToken')

  useEffect(() => {
    const fetchData = async () => {
      if (token) {
        try {
          const data = await pointApi()
          setPoint(prevState => ({
            ...prevState,
            nickname: data?.nickname || prevState.nickname,
            havePoint: data?.havePoint || prevState.havePoint,
            profileImageUrl: data?.profileImageUrl || prevState.profileImageUrl
          }));
        } catch (error) {
          console.error("Error ChallengeProfile:", error);
        }
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className={styles.name}>
        <img src={point.profileImageUrl} alt="" className={styles.img}/>
        <div className={styles.nickname}>{point.nickname}</div>
      </div>
      <div className={styles.credit}>
        {point.havePoint} 크레딧
        <img src={credit} alt="credit" />
      </div>
    </>
  )
}

export default ChallengeProfile
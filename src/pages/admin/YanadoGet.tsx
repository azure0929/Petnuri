import { useEffect, useState } from 'react';

interface RewardData {
  id: number
  thumbnail: string,
  poster: string,
  title: string,
  subTitle: string,
  notice: string,
  guide: string,
  point: number,
  status: string,
  startDate: string,
  endDate: string
}

const YanadoGet = () => {
  const [rewardData, setRewardData] = useState<RewardData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/Yanado.json');
        const data = await response.json();
        setRewardData(data.data[0]);
      } catch (error) {
        console.error('YanadoGet Error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <p>등록된 야나도 챌린지</p>
      <h1>타이틀 : {rewardData?.title}</h1>
      <img 
      src={rewardData?.thumbnail} 
      alt="Thumbnail" 
      style={{ maxWidth: '100px', maxHeight: '100px' }}/>
      <p>서브 타이틀: {rewardData?.subTitle}</p>
      <p>유의사항: {rewardData?.notice}</p>
      <p>가이드: {rewardData?.guide}</p>
      <p>포인트: {rewardData?.point}</p>
      <p>인증여부: {rewardData?.status}</p>
      <p>포스터: {rewardData?.poster}</p>
      <p>Start Date: {rewardData?.startDate}</p>
      <p>End Date: {rewardData?.endDate}</p>
    </div>
  );
};

export default YanadoGet;

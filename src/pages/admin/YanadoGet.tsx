import { useEffect, useState } from 'react';

interface RewardData {
  title: string;
  thumbnail: string;
  rewardStartDate: string;
  rewardEndDate: string;
}

const YanadoGet = () => {
  const [rewardData, setRewardData] = useState<RewardData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/Yanado.json');
        const data = await response.json();
        setRewardData(data);
      } catch (error) {
        console.error('YanadoGet Error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <p>등록된 야나도 챌린지</p>
      <h1>{rewardData?.title}</h1>
      <img 
      src={rewardData?.thumbnail} 
      alt="Thumbnail" 
      style={{ maxWidth: '100px', maxHeight: '100px' }}/>
      <p>Start Date: {rewardData?.rewardStartDate}</p>
      <p>End Date: {rewardData?.rewardEndDate}</p>
    </div>
  );
};

export default YanadoGet;

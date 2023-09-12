import { useEffect, useState } from 'react';

interface Review {
  itemId?: number,
  name: string
}

interface RewardData {
  title: string;
  thumbnail: string;
  kit_start_date: string;
  kit_end_date: string;
  reward_start_date: string;
  reward_end_date: string;
  rewardList: Review[];
}

const CheonhaGet = () => {
  const [rewardData, setRewardData] = useState<RewardData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/Cheonha.json');
        const data = await response.json();
        setRewardData(data);
      } catch (error) {
        console.error('CheonhaGet Error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <p>등록된 나여기 챌린지</p>
      <h1>{rewardData?.title}</h1>
      <img 
      src={rewardData?.thumbnail} 
      alt="Thumbnail" 
      style={{ maxWidth: '100px', maxHeight: '100px' }}/>
      <p>키트 시작일: {rewardData?.kit_start_date}</p>
      <p>키트 종료일: {rewardData?.kit_end_date}</p>
      <p>챌린지 시작일: {rewardData?.reward_start_date}</p>
      <p>챌린지 종료일: {rewardData?.reward_end_date}</p>

      <div>
         {rewardData?.rewardList.map((rewardList, index) => (
           <p key={index}>{rewardList.name}</p>
         ))}
       </div>
    </div>
  );
};

export default CheonhaGet;

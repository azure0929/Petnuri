import { useEffect, useState } from 'react';

interface Review {
  itemId?: number,
  name: string
}

interface RewardData {
  title: string;
  thumbnail: string;
  kitStartDate: string;
  kitEndDate: string;
  rewardStartDate: string;
  rewardEndDate: string;
  rewardList: Review[];
}

const NayegiGet = () => {
  const [rewardData, setRewardData] = useState<RewardData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/Nayegi.json');
        const data = await response.json();
        setRewardData(data);
      } catch (error) {
        console.error('NayegiGet Error:', error);
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
      <p>키트 시작일: {rewardData?.kitStartDate}</p>
      <p>키트 종료일: {rewardData?.kitEndDate}</p>
      <p>챌린지 시작일: {rewardData?.rewardStartDate}</p>
      <p>챌린지 종료일: {rewardData?.rewardEndDate}</p>

      <div>
         {rewardData?.rewardList.map((rewardList, index) => (
           <p key={index}>{rewardList.name}</p>
         ))}
       </div>
    </div>
  );
};

export default NayegiGet;

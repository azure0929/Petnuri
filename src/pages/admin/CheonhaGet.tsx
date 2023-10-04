import { useEffect, useState } from 'react';

interface RewardData {
  id: number
  title: string
  subTitle: string
  notice: string
  thumbnail: string
  poster: string
  status: string
  startDate:string
  endDate: string
  kitStartDate: string
  kitEndDate: string
  rewardStartDate: string
  rewardEndDate: string
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
      <p>서브타이틀: {rewardData?.subTitle}</p>
      <p>유의사항: {rewardData?.notice}</p>
      <p>상세 포스터: {rewardData?.poster}</p>
      <p>상태?: {rewardData?.status}</p>
      <p>시작일: {rewardData?.startDate}</p>
      <p>종료일: {rewardData?.endDate}</p>
      <p>키트 시작일: {rewardData?.kitStartDate}</p>
      <p>키트 종료일: {rewardData?.kitEndDate}</p>
      <p>챌린지 시작일: {rewardData?.rewardStartDate}</p>
      <p>챌린지 종료일: {rewardData?.rewardEndDate}</p>
    </div>
  );
};

export default CheonhaGet;

import { useEffect, useState } from 'react';

interface Review {
  reviewUserId: number;
  reviewUserNickname: string;
  reviewImgUrl: string;
}

interface ChallengeData {
  challengeId: number;
  challengeName: string;
  challengeReview: string;
  userId: number;
  review: Review[];
  status: boolean;
}

const DailyGet = () => {
  const [challenges, setChallenges] = useState<ChallengeData[]>([]);

   useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/Daily.json');
        const data = await response.json();
        setChallenges([data]);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
   }, []);

   return (
     <>
       {challenges.map(challengeData => (
         <div key={challengeData.challengeId}>
           <h1>챌린지 이름 : {challengeData.challengeName}</h1>
           <p>챌린지 설명 : {challengeData.challengeReview}</p>

           {challengeData.review.map((review, index) => (
             <div key={index}>
               <h3>리뷰 유저 닉넴 : {review.reviewUserNickname}</h3>
               <img 
               src={review.reviewImgUrl} 
               alt="Review" 
               style={{ maxWidth: '100px', maxHeight: '100px' }}/>
             </div>
           ))}
         </div>
       ))}
     </>
   );
};

export default DailyGet;

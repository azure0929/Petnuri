import { useState } from "react";

const YanadoPost = () => {

  const [challengeData, setChallengeData] = useState<{
    challengeName: string;
    challengeReview: string;
    hashTag: string[];
    startDate: string;
    endDate: string;
    point: number;
    joinWay:string;       
    rewardTerm:string;
  }>({
    challengeName: "",
    challengeReview: "",
    hashTag: [],
    startDate: "",
    endDate: "",
    point: 0,
    joinWay: "",       
    rewardTerm: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChallengeData({...challengeData, [e.target.name]: e.target.value});
  }

  const handleArrayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChallengeData({...challengeData, hashTag: e.target.value.split(',')});
  } 

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setChallengeData({
        challengeName: "",
        challengeReview: "",
        hashTag: [],
        startDate:"",
        endDate:"",
        point :0,
        joinWay:"",       
        rewardTerm:""
     });
  }

  const isFormValid = () => {
    return (
      challengeData.challengeName &&
      challengeData.challengeReview &&
      challengeData.hashTag.length > 0 &&
      challengeData.startDate &&
      challengeData.endDate &&
      challengeData.point &&
      challengeData.joinWay &&
      challengeData.rewardTerm
    );
  };

  return (
    <>
        <div>
          <div>'야 나도' 챌린지를 등록하는 곳</div>
          <form onSubmit={handleSubmit}>

            <input 
            name="challengeName" 
            onChange={handleInputChange}
            value={challengeData.challengeName} 
            placeholder="챌린지 이름 입력" />

            <input 
            name="challengeReview" 
            onChange={handleInputChange}
            value={challengeData.challengeReview} 
            placeholder="챌린지 인증 방법"/>

            <input 
            name="hashTag" 
            onChange= { handleArrayChange }
            value={challengeData.hashTag.join(',')} 
            placeholder="해쉬태그 입력 ,로 구분" />

            <input 
            type="date" 
            name="startDate" 
            onChange={handleInputChange}
            value={challengeData.startDate}
            placeholder="시작일"/>

            <input 
            type="date" 
            name="endDate" 
            onChange={handleInputChange}
            value= { challengeData.endDate}
            placeholder="종료일"/>

            <input 
            type='number' 
            name='point' 
            onChange={handleInputChange}
            value= { challengeData.point }
            placeholder="포인트 입력"/>

            <input 
            name='joinWay' 
            onChange={handleInputChange}
            value= { challengeData.joinWay}
            placeholder="뭔지 모름"/>

            <input 
            name ='rewardTerm' 
            onChange={handleInputChange}
            value ={ challengeData.rewardTerm}
            placeholder="뭔지 모름"/> 

            <button 
            type="submit" 
            disabled={!isFormValid()}
            title={!isFormValid() ? "input 다 채우셈!" : ""}>
              등록하기
            </button>
          </form>
        </div>
    </>
  );
};
export default YanadoPost;

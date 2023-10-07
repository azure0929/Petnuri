import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Background from "@/components/Background";
import styles from "@/styles/petregist.module.scss";
import arrow_left_mid from "@/assets/arrow_left_mid.svg";
import { useRecoilValue, useRecoilState } from "recoil";
import { nicknameState, selectedPetState, selectedMaleState, ageState, petTypeState } from "@/store/signupState";
import { registerPet } from "@/lib/apis/userApi";


const PetRegist = () => {
  const nickname = useRecoilValue(nicknameState);
  const selectedPet = useRecoilValue(selectedPetState);
  const [selectedMale, setSelectedMale]= useRecoilState(selectedMaleState);
  const [age, setAge]= useRecoilState(ageState);
  const [pettype, setPettype]= useRecoilState(petTypeState);
  const [pettypeError, setPettypeError] = useState("");
  const [ageError, setAgeError] = useState("");
  const [showGender, setShowGender] = useState(false);
  const [showAge, setShowAge] = useState(false);
  const [inPettypeValid, setInPettypeValid] = useState(true);
  const [inAgeValid, setInAgeValid] = useState(true);

  const handlePettypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPettype = event.target.value;
    setPettype(newPettype);

    const regex = /^[가-힣a-zA-Z0-9]*$/;
    if (newPettype.length === 0) {
      setPettypeError('');
      setInPettypeValid(true);
    } else if (!regex.test(newPettype) || newPettype.length < 1 || newPettype.length > 10) {
      setPettypeError('특수문자 및 공백을 제외한 최소 1자~10자 입력');
      setInPettypeValid(false); 
    } else {
      setPettypeError('');
      setShowGender(true);
      setInPettypeValid(true);
    }
  };

  const handlePetSelection = (male:string) => {
    if (selectedMale === male) {
      setSelectedMale('');
      setShowAge(false);
    } else {
      setSelectedMale(male);
      setShowAge(true);
    }
  };

  const handleAgeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newAge = event.target.value;
    if (!isNaN(Number(newAge))) {
      setAge(Number(newAge));

      const ageValue = Number(newAge);
      const ageRegex = /^[1-9][0-9]?$|^25$/;

      if (ageValue >= 1 && ageValue <= 25 && ageRegex.test(newAge)) {
        setAgeError('');
        setInAgeValid(true); 
      } else {
        setAgeError('나이를 1세에서 25세 사이의 숫자로 입력해주세요.');
        setInAgeValid(false); 
      }
    } else {
      setAgeError('숫자만 입력해주세요.');
      setInAgeValid(false); // Set age as invalid
    }
  };

  const navigate = useNavigate();

  const onRegistSuccess = async () => {
    try{
      let response = await registerPet({
        "species": selectedPet,
        "petName": nickname,
        "breed": pettype,
        "petGender": selectedMale,
        "petAge": age
      });
      
      if(response?.status == 201){
        navigate(`/registsuccess`);
      }
      else{
        return response?.status
      }
    }catch(error){
      console.log(error)
    }
  }

  const onOnBoarding = () => {
    navigate(`/onboarding`);
  }

  const isNextButtonEnabled = selectedMale !== null && !ageError && age !== 0;

  return (
    <>
      <Background>
        <div className={styles.head}>
          <div role="button" className={styles.prev} onClick={onOnBoarding}>
            <img src={arrow_left_mid} alt="prev" />
          </div>
          <p>펫 정보 등록</p>
        </div>
        <div className={styles.contents}>
          <div className={styles.name}>
            <h2 className={styles.title}>견종/묘종을 등록해 주세요</h2>
            <input
              type="text"
              placeholder="ex) 말티즈, 브리티쉬 숏헤어"
              value={pettype}
              onChange={handlePettypeChange}
              className={inPettypeValid ? '' : styles.invalid}
            />
            {pettypeError && (
              <p>{pettypeError}</p>
            )}
          </div>
          <div className={`${styles.select} ${showGender ? styles.selectActive : ''}`}>
            <h2 className={styles.title}>성별을 선택해주세요</h2>
            <div className={styles.list}>
              <div
                className={`${styles.maleButton} ${selectedMale === "남" ? styles.active : ""}`}
                role="button"
                onClick={() => handlePetSelection("남")}
              >
                남
              </div>
              <div
                className={`${styles.maleButton} ${selectedMale === "여" ? styles.active : ""}`}
                role="button"
                onClick={() => handlePetSelection("여")}
              >
                여
              </div>
            </div>
          </div>
          <div className={`${styles.age} ${showAge ? styles.selectActive : ''}`}>
            <h2 className={styles.title}>나이를 입력해주세요</h2>
            <input
              type="text"
              placeholder="숫자만 입력해 주세요"
              value={age !== null ? age.toString() : ''}
              onChange={handleAgeChange}
              className={inAgeValid ? '' : styles.invalid}
            />
            {ageError && (
              <p>{ageError}</p>
            )}
          </div>
        </div>
        <div className={styles.next}>
          <div
            role="button"
            style={{
              backgroundColor: isNextButtonEnabled ? '#3F54D1' : 'rgba(214, 214, 214, 0.5)',
              color: isNextButtonEnabled ? '#F5F5F5' : '#999999',
              borderColor: ageError ? '#F42A3B' : undefined
            }}
            onClick={onRegistSuccess}
          >
            다음
          </div>
        </div>
      </Background>
    </>
  );
};

export default PetRegist;

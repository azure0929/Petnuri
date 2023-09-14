import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Background from "@/components/Background";
import styles from "@/styles/petregist.module.scss";
import arrow_left_mid from "@/assets/arrow_left_mid.svg";

type MaleType = "남" | "여";

const PetRegist = () => {
  const [selectedMale, setSelectedMale] = useState<MaleType | null>(null);
  const [pettype, setPettype] = useState("");
  const [age, setAge] = useState("");
  const [pettypeError, setPettypeError] = useState("");
  const [ageError, setAgeError] = useState("");
  const [showGender, setShowGender] = useState(false);
  const [showAge, setShowAge] = useState(false);

  const handlePettypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPettype = event.target.value;
    setPettype(newPettype);

    const regex = /^[가-힣a-zA-Z0-9]*$/;
    if (newPettype.length === 0) {
      setPettypeError("");
    } else if (!regex.test(newPettype) || newPettype.length < 1 || newPettype.length > 10) {
      setPettypeError("닉네임이 잘못 입력되었습니다.");
    } else {
      setPettypeError("");
      setShowGender(true);
    }
  };

  const handlePetSelection = (male: MaleType) => {
    if (selectedMale === male) {
      setSelectedMale(null);
      setShowAge(false); // 클릭하면 나이 입력 영역 숨김
    } else {
      setSelectedMale(male);
      setShowAge(true);
    }
  };

  const handleAgeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newAge = event.target.value;
    // 입력값이 숫자인지 확인
    if (!isNaN(Number(newAge))) {
      setAge(newAge);

      const ageValue = Number(newAge);
      const ageRegex = /^[1-9][0-9]?$|^25$/;
      
      if (ageValue >= 1 && ageValue <= 25 && ageRegex.test(newAge)) {
        setAgeError("");
      } else {
        setAgeError("나이를 1세에서 25세 사이의 숫자로 입력해주세요.");
      }
    } else {
      setAgeError(""); // 입력값이 비어있으면 오류 메시지를 지움
    }
  }

  const navigate = useNavigate();

  const onRegistSuccess = () => {
    navigate(`/registsuccess`);
  }

  const onOnBoarding = () => {
    navigate(`/onboarding`);
  }

  const isNextButtonEnabled = selectedMale !== null && !ageError && age !== '';

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
              style={{
                borderColor: pettypeError ? '#F42A3B' : undefined
              }}
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
                강아지
              </div>
              <div
                className={`${styles.maleButton} ${selectedMale === "여" ? styles.active : ""}`}
                role="button"
                onClick={() => handlePetSelection("여")}
              >
                고양이
              </div>
            </div>
          </div>
          <div className={`${styles.age} ${showAge ? styles.selectActive : ''}`}>
            <h2 className={styles.title}>나이를 입력해주세요</h2>
            <input
              type="text"
              placeholder="숫자만 입력해 주세요"
              value={age}
              onChange={handleAgeChange}
              style={{
                borderColor: ageError ? '#F42A3B' : undefined
              }}
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

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Background from "@/components/Background";
import styles from '@/styles/onboarding.module.scss';

type PetType = "강아지" | "고양이";

const OnBoarding = () => {
  const [selectedPet, setSelectedPet] = useState<PetType | null>(null);
  const [showName, setShowName] = useState(false);
  const [nickname, setNickname] = useState('');
  const [nicknameError, setNicknameError] = useState('');
  const [isNicknameValid, setIsNicknameValid] = useState(true);
  
  const navigate = useNavigate();

  const onMain = () => {
    navigate(`/`)
  }

  const onPetRegist = () => {
    navigate(`/petregist`)
  }

  const handlePetSelection = (pet: PetType) => {
    if (selectedPet === pet) {
      setSelectedPet(null); 
      setShowName(false);
    } else {
      setSelectedPet(pet);
      setShowName(true);
    }
  };

  const handleNicknameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newNickname = event.target.value;
    setNickname(newNickname);

    // 유효성 검사: 특수문자 및 공백 제외한 최소 1자 이상 10자 이하
    const regex = /^[가-힣a-zA-Z0-9]*$/;
    if (newNickname.length === 0) {
      setNicknameError('');
      setIsNicknameValid(true);
    } else if (!regex.test(newNickname) || newNickname.length < 1 || newNickname.length > 10) {
      setNicknameError('특수문자 및 공백을 제외한 최소 1자~10자 입력');
      setIsNicknameValid(false);
    } else {
      setNicknameError('');
      setIsNicknameValid(true);
    }
  };

  const isNextButtonEnabled = selectedPet !== null && !nicknameError && nickname !== '';

  return (
    <>
      <Background>
        <div className={styles.head}>
          <p>펫 정보 등록</p>
        </div>
        <div className={styles.contents}>
          <div className={styles.welcome}>
            <p>
              반가워요! <br />
              회원가입이 완료되었어요!
            </p>
            <span>정보를 입력하면 맞춤 컨텐츠를 만나볼 수 있어요</span>
          </div>
          <div className={styles.select}>
            <h2 className={styles.title}>어떤 반려동물과 함께하고 계신가요?</h2>
            <div className={styles.list}>
              <div
                className={`${styles.petButton} ${selectedPet === '강아지' ? styles.active : ''}`}
                role="button"
                onClick={() => handlePetSelection('강아지')}
              >
                강아지
              </div>
              <div
                className={`${styles.petButton} ${selectedPet === '고양이' ? styles.active : ''}`}
                role="button"
                onClick={() => handlePetSelection('고양이')}
              >
                고양이
              </div>
            </div>
          </div>
          <div className={`${styles.name} ${showName ? styles.nameActive : ''}`}>
            <h2 className={styles.title}>반려동물의 이름을 입력해주세요!</h2>
            <input
              type="text"
              placeholder="반려동물의 이름이 뭔가요?"
              value={nickname}
              onChange={handleNicknameChange}
              className={isNicknameValid ? '' : styles.invalid}
            />
            {nicknameError && (
              <p>{nicknameError}</p>
            )}
          </div>
          <div role="button" className={styles.skip} onClick={onMain}>
            <p>지금은 건너뛰기</p>
          </div>
        </div>
        <div className={styles.next}>
          <div
            role="button"
            style={{
              backgroundColor: isNextButtonEnabled ? '#3F54D1' : 'rgba(214, 214, 214, 0.5)',
              color: isNextButtonEnabled ? '#F5F5F5' : '#999999',
              borderColor: nicknameError ? '#F42A3B' : undefined
            }}
            onClick={onPetRegist}
          >
            다음
          </div>
        </div>
      </Background>
    </>
  );
};

export default OnBoarding;

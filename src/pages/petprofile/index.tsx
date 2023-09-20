import { useState, useRef } from 'react';
import styles from '@/styles/petprofile.module.scss'
import Background from '@/components/Background';
import Header from '@/components/Head';
import { Link } from 'react-router-dom';
import { IoIosArrowBack, IoIosAdd } from 'react-icons/io'
import checkGray from '@/assets/check_circle_gray.svg'
import checkBlue from '@/assets/check_circle_blue.svg'

const PetProfileAdd = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [isSelected, setIsSelected] = useState(false);
  const [gender, setGender] = useState('남');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [image, setImage] = useState<string | null>(null);

  const handleClick = () => {
    setIsSelected(!isSelected);
  };

  const handleClickImageArea = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleImageUpload = (e:any) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      if (typeof reader.result === 'string') {
        setImage(reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async () => {
    // json으로 보낼때
    const formData = new FormData();
    const data = {
      name,
      age,
      gender,
      isSelected: isSelected.toString(),
    };
    formData.append("data", JSON.stringify(data));
    // formdata로 보낼때
    formData.append('name', name);
    formData.append('age', age);
    formData.append('gender', gender);
    formData.append('isSelected', isSelected.toString());
    
    if (image) {
      const file = new File([image], 'petProfile.jpg');
      formData.append('image', file);
    }
    try {
      const response = await fetch('/api/pet-profiles', { 
        method: 'POST',
        body: formData,
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error(error); 
    }
  }
  return(
    <>
      <Background>
        <Header>
          <div className={styles.head}>
            <Link to="/">
              <IoIosArrowBack size="24" className={styles.io}/>
            </Link>
            <span>펫 프로필 추가</span>
            <div className={styles.eorl}></div>
          </div>
        </Header>
        <div className={styles.body}>
          <div className={styles.info}>
            {/* 사진 추가 */}
            <div className={styles.photoarea}>
            <div className={styles.photo}>
              {image && <img src={image} alt="" className={styles.img} />}
              <input 
              type="file"
              ref={fileInputRef}  
              style={{display: 'none'}} 
              onChange={(e) => handleImageUpload(e)} />
              <div className={styles.plusbtn} onClick={handleClickImageArea}>
                <IoIosAdd />
              </div>
            </div>
            </div>
            {/* 닉네임란 */}
            <div className={styles.nickarea}>
              <div className={styles.nickname}>펫누리</div>
              <div 
                className={`${styles.setting} ${isSelected ? styles.selected : ''}`}
                onClick={handleClick}
              >
                대표 펫 프로필로 설정하기 
                <img src={isSelected ? checkBlue : checkGray} alt="체크" />
              </div>
            </div>
          </div>
          {/* 정보 입력 */}
          <div className={styles.enter}>
            <div className={styles.contents}>
              <div className={styles.title}>펫 이름을 입력해주세요</div>
              <input 
              placeholder='이름을 입력해주세요' 
              className={styles.input}
              value={name}
              onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className={styles.contents}>
              <div className={styles.title}>성별을 입력해주세요</div>
              <div className={styles.segment}>
                <div 
                className={`${styles.wrapper} ${gender === '남' ? styles.on : styles.off}`}
                onClick={() => setGender('남')}
                >
                  남
                </div>
                <div 
                  className={`${styles.wrapper} ${gender === '여' ? styles.on : styles.off}`}
                  onClick={() => setGender('여')}
                >
                  여
                </div>
              </div>
            </div>
            <div className={styles.contents}>
              <div className={styles.title}>나이를 입력해주세요</div>
              <input 
              placeholder='나이를 입력해주세요' 
              className={styles.input}
              value={age}
              onChange={(e) => setAge(e.target.value)}/>
            </div>
          </div>
          {/* 버튼 */}
          <form className={styles.btnwrapper} onSubmit={handleSubmit}>
            <button 
              disabled={!name || !age || !image}
              className={
                `${styles.button} 
                ${(name && age && image) 
                  ? styles.able 
                  : styles.disable}`} 
            >
              추가하기
            </button>
          </form>
        </div>
      </Background>
    </>
  );
};

export default PetProfileAdd
import styles from "@/styles/write.module.scss";
import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";
import { useState, useRef, SetStateAction } from "react";
import { writingOut } from "@/lib/apis/pettalkApi";
import { useNavigate } from "react-router-dom";

interface PettalkWriteProps {
  isFreeTalkWrite: boolean;
  petType: string;
}

const PettalkWrite: React.FC<PettalkWriteProps> = ({
  isFreeTalkWrite,
  petType,
}) => {
  const [showImages, setShowImages] = useState([]);
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [inputCount, setInputCount] = useState(0);
  const [imageFiles, setImageFiles] = useState<File[]>([]);

  const inputFileRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  const handleContentChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    const newContent = e.target.value;
    setContent(newContent);
    setInputCount(newContent.length);
  };

  const handleCategoryChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setCategory(e.target.value);
  };

  const handleTitleChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setTitle(e.target.value);
  };

  const isSubmitButtonEnabled = () => {
    return category !== "" && title !== "" && inputCount !== 0;
  };

  const handleAddImages = (event: React.ChangeEvent<HTMLInputElement>) => {
    const imageLists = event.target.files;
    let imageUrlLists = [...showImages];
    let imageFileLists = [...imageFiles];

    if (imageUrlLists.length > 4) {
      alert("더 이상 이미지를 추가할 수 없습니다.");
      return;
    }

    if (imageLists) {
      for (let i = 0; i < imageLists.length; i++) {
        const currentImage = imageLists[i];
        const validImageTypes = ["image/jpeg", "image/png", "image/jpg"];

        if (validImageTypes.includes(currentImage.type)) {
          const currentImageUrl = URL.createObjectURL(currentImage) as never;
          imageUrlLists.push(currentImageUrl);
          imageFileLists.push(currentImage);
        } else {
          alert("올바른 이미지 형식이 아닙니다.");
        }
      }

      if (imageUrlLists.length > 4) {
        imageUrlLists = imageUrlLists.slice(0, 10);
        imageFileLists = imageFileLists.slice(0, 10);
      }

      setShowImages(imageUrlLists);
      setImageFiles(imageFileLists);
    }
  };

  const handleDeleteImage = (id: number) => {
    setShowImages(showImages.filter((_, index) => index !== id));
  };

  //api post
  const handlePostData = async () => {
    const request = {
      petType,
      mainCategoryId: 1,
      subCategoryId: Number(category),
      title,
      content,
    };

    try {
      const response = await writingOut({
        images: imageFiles,
        request,
      });
      console.log(response);

      if (response.status === 201 || response.status === 200) {
        console.log("게시물이 성공적으로 작성되었습니다.", response.data);
        navigate("/petTalk");
      } else {
        console.error("게시물 작성 중 오류 발생:", response);
      }
    } catch (error) {
      console.error("게시물 작성 중 오류 발생:", error);
    }
  };

  return (
    <div className={styles.all}>
      {!isFreeTalkWrite ? (
        <div className={styles.selectarea}>
          <select
            name="category"
            className={styles.category}
            disabled={isFreeTalkWrite}
            onChange={handleCategoryChange}
            value={category}
          >
            <option value="">카테고리를 선택하세요</option>
            <option value="1">질병/질환</option>
            <option value="2">미용/패션</option>
            <option value="3">교육/훈련</option>
            <option value="4">양육/관리</option>
            <option value="5">반려용품</option>
          </select>
        </div>
      ) : null}
      <div className={styles.photoarea}>
        <div className={styles.photo}>사진 등록하기</div>
        <div className={styles.photoInput}>
          <div className={styles.label}>
            <div
              className={styles.upload}
              onClick={() => {
                if (showImages.length < 3) {
                  inputFileRef.current?.click();
                }
              }}
            >
              <AiOutlinePlus className={styles.icon} />
            </div>
            <div className={styles.imageList}>
              {showImages.map((image, id) => (
                <div className={styles.imageContainer} key={id}>
                  <img src={image} alt={`${image}-${id}`} />
                  <button onClick={() => handleDeleteImage(id)}>
                    <AiOutlineClose />
                  </button>
                </div>
              ))}
            </div>
          </div>
          <input
            type="file"
            id="input-file"
            multiple
            name="file"
            style={{ display: "none" }}
            onChange={handleAddImages}
            ref={inputFileRef}
          />
        </div>
      </div>
      <div className={styles.titlearea}>
        <div className={styles.title}>제목을 입력해주세요</div>
        <input
          placeholder="제목을 입력해주세요."
          value={title}
          onChange={handleTitleChange}
          maxLength={100}
        />
      </div>
      <div className={styles.textarea}>
        <div className={styles.text}>게시글을 입력해주세요</div>
        <textarea
          placeholder="욕설과 비방의 내용은 제재의 대상이 될 수 있습니다."
          onChange={handleContentChange}
          maxLength={1000}
          value={content}
        />
        <p className={styles.inputCount}>
          <span>{inputCount}</span>
          <span>/1000</span>
        </p>
      </div>
      <div className={styles.btnarea}>
        <button
          style={{
            backgroundColor: isSubmitButtonEnabled() ? "#3F54D1" : "",
            color: isSubmitButtonEnabled() ? "#fff" : "",
          }}
          disabled={!isSubmitButtonEnabled()}
          onClick={handlePostData}
        >
          작성 완료
        </button>
      </div>
    </div>
  );
};

export default PettalkWrite;

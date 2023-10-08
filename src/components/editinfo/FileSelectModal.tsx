import styles from '@/styles/editinfo.module.scss';

interface FileSelectModalProps {
  setImg: (img: string) => void;
  setFilemodal: (filemodal: boolean) => void;
  setFile: (file: File) => void;
  setImageChanged: (value: boolean) => void;
  convertURLtoFile(url:string): Promise<File>;
  defaultImage: string;
}

const FileSelectModal = ({setImg, setFilemodal, setFile, convertURLtoFile, setImageChanged, defaultImage}: FileSelectModalProps) => {
  return (
    <div className={styles.filemodalcontain}>
      <div className={styles.filebtns}>
        <div className={styles.choosefilebtns}>
          <label htmlFor="file">
            <div className={styles.upload}>사진 선택하기</div>
          </label>
          <input
            type="file"
            name="file"
            id="file"
            style={{ display: 'none' }}
            onChange={(e) => {
              setImg(URL.createObjectURL(e.target.files![0]));
              setFilemodal(false);
              setFile(e.target.files![0]);
              setImageChanged(true);
            }}
          />
          <button
            onClick={() => {
              setImg('');
              convertURLtoFile(defaultImage).then((res) => setFile(res));
              setFilemodal(false);
            }}
          >
            기본 이미지로 변경
          </button>
        </div>
        <div className={styles.exitbtn}>
          <button onClick={() => setFilemodal(false)}>취소</button>
        </div>
      </div>
    </div>
  )
}

export default FileSelectModal
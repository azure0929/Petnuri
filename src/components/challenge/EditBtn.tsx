import styles from '@/styles/editbtn.module.scss'

interface EditBtnProps {
  version: 'dark' | 'light'
  text: string
  onClick?: () => void;
}

const EditBtn = ({ version, text, onClick }:EditBtnProps) => {
  const btnStyle = version === 'dark' ? styles.dark : styles.light;
  
  return (
    <div className={`${styles.container} ${btnStyle}`} onClick={onClick}>
      {text}
    </div>
  )
}

export default EditBtn

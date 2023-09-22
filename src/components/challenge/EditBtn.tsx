import styles from '@/styles/editbtn.module.scss'

interface EditBtnProps {
  version: 'dark' | 'light'
  text: string
}

const EditBtn = ({ version, text }:EditBtnProps) => {
  const btnStyle = version === 'dark' ? styles.dark : styles.light;
  
  return (
    <div className={`${styles.container} ${btnStyle}`}>
      {text}
    </div>
  )
}

export default EditBtn

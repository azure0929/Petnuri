import styles from '@/styles/editbtn.module.scss'

const EditBtn = ({ version, text }) => {
  const btnStyle = version === 'dark' ? styles.dark : styles.light;
  
  return (
    <div className={`${styles.container} ${btnStyle}`}>
      {text}
    </div>
  )
}

export default EditBtn

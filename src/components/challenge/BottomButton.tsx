import styles from '@/styles/bottombutton.module.scss'

interface BottomButtonProps {
  text: string
  isDisabled: boolean
}

const BottomButton = ({text, isDisabled}:BottomButtonProps) => {
  return (
    <div className={styles.btnwrapper} >
      <button className={`${styles.button} ${isDisabled ? styles.disable : styles.able}`}>
        {text}
      </button>
    </div>
  )
}

export default BottomButton
import styles from '@/styles/bottombutton.module.scss'

interface BottomButtonProps {
  text: string
  isDisabled: boolean
  onClick?: () => void
}

const BottomButton = ({text, isDisabled, onClick}:BottomButtonProps) => {
  return (
    <div className={styles.btnwrapper} >
      <button 
      className={`${styles.button} ${isDisabled ? styles.disable : styles.able}`}
      onClick={onClick}
      disabled={isDisabled}>
        {text}
      </button>
    </div>
  )
}

export default BottomButton
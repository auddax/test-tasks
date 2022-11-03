import styles from './ErrorMessage.module.css';

const ErrorMessage = (props) => {
  return(
    <div className={styles['backdrop']}>
      <div className={styles['error-modal']}>
        <h2 className={styles['error-modal__header']}>Произошла ошибка!</h2>
        <button className={styles['error-modal__button']} onClick={props.onClick}>Повторить запрос</button>
      </div>
    </div>
  )
}

export default ErrorMessage;

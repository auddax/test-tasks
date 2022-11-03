import styles from './Spinner.module.css';

const Spinner = () => {
  return (
    <div className={styles['spinner']}>
      <div className={styles['spinner__loader']}>
      </div>
    </div>
  );
}

export default Spinner;
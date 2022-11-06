import Modal from '../Modal/Modal';
import styles from './Backdrop.module.css';

const Backdrop = (props) => {
  return(
    <div className={styles['backdrop']}>
      <Modal data={props.data} type={props.type} />
    </div>
  )
}

export default Backdrop;
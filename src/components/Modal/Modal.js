import styles from './Modal.module.css';
import { XLg } from 'react-bootstrap-icons';
import dayjs from 'dayjs';
import store from '../../store/rootStore';

const Modal = (props) => {

  const closeReminder = () => {
    store.eventStore.closeReminder();
  }
  const Success = () => <h4>{props.data}</h4>

  const Reminder = () => {
    const dayObj = dayjs(props.data.date);
    const date = props.data.date ? `В ${dayObj.format('dddd')} (${dayObj.format('D MMMM')}) у` : 'У';
    const start = props.data.timeStart ? `с ${props.data.timeStart}` : '';
    const end = props.data.timeEnd ? `до ${props.data.timeEnd}` : '';

    return(
      <div className={styles['reminder']}>
        <div className={styles['reminder__header']}>
          <h4>Напоминание</h4>
          <div onClick={closeReminder} className={styles['reminder__close']}>
            <XLg className={styles['crossmark']} size={20} />
          </div>
        </div>
        <div className={styles['reminder__body']}>
          {date} вас запланировано: «{props.data.name}» {start} {end}
        </div>
      </div>
    )
  }

  return(
    <div className={styles['modal']}>
      {props.type === 'success' ? <Success /> : ''}
      {props.type === 'reminder' ? <Reminder /> : ''}
    </div>
  )
}

export default Modal;
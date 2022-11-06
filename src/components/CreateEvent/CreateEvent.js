import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { v4 as uuidv4 } from 'uuid';
import { TextLeft, Clock, Bell, Dash, ArrowLeftShort } from 'react-bootstrap-icons';
import store from '../../store/rootStore';
import styles from './CreateEvent.module.css';

const CreateEvent = observer((props) => {
  const navigate = useNavigate();
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState(props.date);
  const [eventTimeStart, setEventTimeStart] = useState('');
  const [eventTimeEnd, setEventTimeEnd] = useState('');
  const [eventReminderDate, setEventReminderDate] = useState('');
  const [eventReminderTime, setEventReminderTime] = useState('')

  const eventNameHandler = (e) => {
    setEventName(e.target.value);
  }

  const eventDateHandler = (e) => {
    setEventDate(e.target.value);
  }

  const eventTimeStartHandler = (e) => {
    setEventTimeStart(e.target.value);
  }

  const eventTimeEndHandler = (e) => {
    setEventTimeEnd(e.target.value);
  }

  const eventReminderDateHandler = (e) => {
    setEventReminderDate(e.target.value);
  }

  const eventReminderTimeHandler = (e) => {
    setEventReminderTime(e.target.value);
  }

  const submitForm = (event) => {
    event.preventDefault();

    const eventData = {
      id: uuidv4(),
      name: eventName,
      date: eventDate,
      timeStart: eventTimeStart,
      timeEnd: eventTimeEnd,
      reminderDate: eventReminderDate,
      reminderTime: eventReminderTime,
    }
    store.eventStore.setEventData(eventData, eventDate);
    store.eventStore.setResult(true);
    navigate('/main', {state: 'create'});
  }

  const goBack = () => {
    navigate('/main');
  }


  return(
    <>
      <header className={styles['header']}>
        <div onClick={goBack} className={styles['arrow']}>
          <ArrowLeftShort size={40} />
        </div>
        <h1>Создать мероприятие</h1>
      </header>
      <form className={styles['form']}>
        <div className={styles['form__input']}>
          <TextLeft className={styles['form__icon']} size={22} />
          <input 
            className={styles['input__text']} 
            type="text" 
            placeholder="Название мероприятия"
            value={eventName}
            onChange={eventNameHandler}
            autoFocus 
          />
        </div>
        <div className={styles['form__input']}>
          <Clock className={styles['form__icon']} size={22} />
          <input 
            className={styles['input__date']} 
            type="date" value={eventDate} 
            onChange={eventDateHandler} 
          />
          <input 
            className={styles['input__time']} 
            type="time"
            value={eventTimeStart}
            onChange={eventTimeStartHandler}
          />
          <Dash size={22} />
          <input 
            className={styles['input__time']} 
            type="time" 
            value={eventTimeEnd}
            onChange={eventTimeEndHandler}
          />
        </div>
        <div className={styles['form__input']}>
          <Bell className={styles['form__icon']} size={22} />
          <input 
            className={styles['input__date']} 
            type="date"
            value={eventReminderDate}
            onChange={eventReminderDateHandler}
          />
          <input 
            className={styles['input__time']} 
            type="time" 
            value={eventReminderTime}
            onChange={eventReminderTimeHandler}
          />
        </div>
        <div className={styles['form__buttons']}>
          <button onClick={submitForm} className={styles['button']}>Сохранить</button>
        </div>
      </form>
    </>
  );
});

export default CreateEvent;
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { TextLeft, Clock, Bell, Dash, ArrowLeftShort } from 'react-bootstrap-icons';
import store from '../../store/rootStore';
import styles from './EditEvent.module.css';

const EditEvent = observer((props) => {
  const navigate = useNavigate();
  const [eventName, setEventName] = useState(props.data.name);
  const [eventDate, setEventDate] = useState(props.data.date);
  const [eventTimeStart, setEventTimeStart] = useState(props.data.timeStart);
  const [eventTimeEnd, setEventTimeEnd] = useState(props.data.timeEnd);
  const [eventReminderDate, setEventReminderDate] = useState(props.data.reminderDate);
  const [eventReminderTime, setEventReminderTime] = useState(props.data.reminderTime);

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
    const eventData = {
      id: props.data.id,
      name: eventName,
      date: eventDate,
      timeStart: eventTimeStart,
      timeEnd: eventTimeEnd,
      reminderDate: eventReminderDate,
      reminderTime: eventReminderTime,
    }
    store.eventStore.updateEventData(eventData);
    store.eventStore.setResult(true);
    navigate('/main', {state: 'edit'});
  }

  const deleteEvent =(event) => {
    store.eventStore.deleteEvent(props.data);
    store.eventStore.setResult(true);
    navigate('/main', {state: 'delete'});
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
        <h1>Изменить мероприятие</h1>
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
          <button onClick={deleteEvent} className={styles['button']}>Удалить</button>
        </div>
      </form>
    </>
  );
});

export default EditEvent;
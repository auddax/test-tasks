import { v4 as uuidv4 } from 'uuid';
import { toJS } from 'mobx';
import { useNavigate } from 'react-router-dom';
import store from '../../store/rootStore';
import styles from './Day.module.css';

const Day = (props) => {
  const navigate = useNavigate();
  const date = props.day.format('YYYY-MM-DD');
  let events = []

  for (const key in store.eventStore.events) {
    if (key === date ) {
      events = toJS(store.eventStore.events[key]);
    }
  }

  const editEvent = (e, item) => {
    e.preventDefault()
    e.stopPropagation()
    navigate('/edit', {state: JSON.stringify(item)});
  }

  return(
    <div className={styles['day']}>
      <div className={styles['day__date']}>
        {props.day.format('D')}
      </div>
      {events.map((item) => {
        return(
          <div onClick={(e) => editEvent(e, item)} className={styles['day__event']} key={uuidv4()}>
            {item.name}
          </div>
        )
      })}
    </div>
  )
}

export default Day;
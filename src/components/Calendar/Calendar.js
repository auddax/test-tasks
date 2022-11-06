import { v4 as uuidv4 } from 'uuid';
import { observer } from 'mobx-react-lite';
import CalendarBuilder from "./CalendarBuilder";
import styles from './Calendar.module.css';
import Day from '../Day/Day';
import store from '../../store/rootStore';
import { Link } from 'react-router-dom';

const Calendar = observer(() => {
  const weekdays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

  return(
    <section className={styles['calendar']}>
      <header className={styles['calendar__header']}>
        <ul>
          {weekdays.map((day) => <li key={uuidv4()} className='weekdays'>{day}</li>)}
        </ul>
      </header>
      <div className={styles['calendar__body']}>
        {CalendarBuilder(store.uiStore.date).map((day) => {
          return(
            <Link key={uuidv4()} to={'/create'} state={{ date: day.format('YYYY-MM-DD') }}>
              <Day day={day} />
            </Link>
          )
        })}
      </div>
    </section>
  );
});

export default Calendar;
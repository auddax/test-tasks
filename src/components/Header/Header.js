import styles from './Header.module.css';
import { observer } from 'mobx-react-lite';
import { v4 as uuidv4 } from 'uuid';
import dayjs from 'dayjs';
import localeData from 'dayjs/plugin/localeData';
import store from '../../store/rootStore';


const Header = observer(() => {
  dayjs.extend(localeData)

  return(
    <header className={styles['header']}>
      <h2 className={styles['header__title']}>
        <span className={styles['title__month']}>{store.uiStore.getCurrentMonthName()} </span>
        <span className={styles['title__year']}>{store.uiStore.getCurrentYear()} г.</span>
      </h2>
      <form className={styles['header__form']}>
        <input className={styles['form__input']} 
          type="number" 
          min="1900" 
          max="2099" 
          step="1"
          onChange={(event) => store.uiStore.setCurrentYear(event.target.value)}
          value={store.uiStore.getCurrentYear()}
        />
        <select className={styles['form__input']} 
          onChange={(event) => store.uiStore.setCurrentMonthNumber(event.target.value)} 
          value={store.uiStore.getCurrentMonthNumber()}
        >
          {dayjs.months().map((month, index) => <option key={uuidv4()} value={index + 1}>{month}</option>)}
        </select>
      </form>
      <div className={styles['header__controls']}>
        <button onClick={() => store.uiStore.setPrevMonth()}> &lt; </button>
        <button onClick={() => store.uiStore.setCurrentMonth()}>Сегодня</button>
        <button onClick={() => store.uiStore.setNextMonth()}> &gt; </button>
      </div>
    </header>
  );
});

export default Header;
import store from "../../store/rootStore";
import { toJS } from "mobx";
import dayjs from 'dayjs';


const setReminder = (events) => {
  const today = dayjs();
  const todayEvents = toJS(events[today.format('YYYY-MM-DD')])

  if (todayEvents) {
    todayEvents.forEach((item) => {
      setInterval(() => {
        const currentTime = dayjs().format('HH:mm')
        console.log(item.reminderTime)
        console.log(currentTime)
        if(item.reminderTime === currentTime) {
          store.eventStore.setReminder(true);
        }
      }, 60000);
    });
  }
};

export default setReminder;

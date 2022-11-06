import { runInAction, makeAutoObservable } from "mobx";
import { toJS } from "mobx";
import dayjs from 'dayjs';

class EventStore {
  events = localStorage.getItem('events') ? JSON.parse(localStorage.getItem('events')) : {};
  result = false;
  reminder = {
    active: false,
    name: '',
    date: '',
    timeStart: '',
    timeEnd: '',
  }

  constructor(rootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  setEventData(eventData, eventDate) {
    if (this.events[eventDate]) {
      this.events[eventDate].push(eventData);
    } else {
      this.events[eventDate] = [eventData];
    }

    localStorage.setItem('events', JSON.stringify(this.events));
  }

  setResult(result) {
    this.result = result;
  }

  setReminder() {
    const today = dayjs();
    const todayEvents = toJS(this.events[today.format('YYYY-MM-DD')]);

    if (todayEvents) {
      todayEvents.forEach((item) => {
        setInterval(() => {
          const currentTime = dayjs().format('HH:mm')
          if(item.reminderTime === currentTime) {
            runInAction(() => {
              this.reminder = {
                active: true,
                name: item.name,
                date: item.date,
                timeStart: item.timeStart,
                timeEnd: item.timeEnd,          
              }
            })
          }
        }, 60000);
      });
    }
  }

  closeReminder() {
    this.reminder.active = false;
  }

  updateEventData(eventData) {
    for (const key in this.events) {
      if (key === eventData.date) {
        this.events[key].forEach((item) => {
          if (item.id === eventData.id) {
            item.name = eventData.name;
            item.date = eventData.date;
            item.timeStart = eventData.timeStart;
            item.timeEnd = eventData.timeEnd;
            item.reminderDate = eventData.reminderDate;
            item.reminderTime = eventData.reminderTime;
          }    
        })
      }
    }

    localStorage.setItem('events', JSON.stringify(this.events));
  }

  deleteEvent(eventData) {
    if (this.events[eventData.date].length > 1) {
      this.events[eventData.date] = this.events[eventData.date].filter((item) => {
        return item.id !== eventData.id;
      })
    } else {
      delete this.events[eventData.date];
    }
    localStorage.setItem('events', JSON.stringify(this.events));
  }

}

export default EventStore;
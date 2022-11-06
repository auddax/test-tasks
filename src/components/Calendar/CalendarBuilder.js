import dayjs from 'dayjs';
import badMutable from 'dayjs/plugin/badMutable';

const CalendarBuilder = (value) => {
  dayjs.extend(badMutable);

  const date = dayjs(value)
  const startDay = date.clone().startOf('month').startOf('week');
  const endDay = date.clone().endOf('month').endOf('week');
  const day = startDay.clone().subtract(1, 'day');
  const calendar = [];
  
  while(day.isBefore(endDay, 'day')) {
    calendar.push(day.add(1, 'day').clone());
  };

  return calendar;
}

export default CalendarBuilder;
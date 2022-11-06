import { makeAutoObservable } from "mobx";
import dayjs from 'dayjs';

class UIStore {
  date = dayjs().toLocaleString();

  constructor(rootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  getCurrentMonthName() {
    const date = dayjs(this.date);
    return date.format('MMMM');
  }

  getCurrentMonthNumber() {
    const date = dayjs(this.date);
    return date.format('M');
  }

  getCurrentYear() {
    const date = dayjs(this.date);
    return date.format('YYYY');
  }

  setCurrentMonthNumber(month) {
    const date = dayjs(this.date);
    this.date = date.set('month', month - 1).toLocaleString();
  }

  setCurrentYear(year) {
    const date = dayjs(this.date);
    this.date = date.set('year', year).toLocaleString();
  }

  setCurrentMonth() {
    this.date = dayjs()
  }

  setPrevMonth() {
    const date = dayjs(this.date);
    this.date = date.subtract(1, 'month').toLocaleString();
  }

  setNextMonth() {
    const date = dayjs(this.date);
    this.date = date.add(1, 'month').toLocaleString();
  }
}

export default UIStore;
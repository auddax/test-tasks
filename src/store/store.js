import { makeAutoObservable, runInAction } from "mobx";

class Store {
  servicesData = [];
  serviceDetails = {};
  state = 'pending';

  constructor() {
    makeAutoObservable(this);
  }

  fetchServicesData() {
    this.state = 'pending';
    fetch('http://localhost:7070/api/services')
      .then(response => response.json())
      .then(data => {
        runInAction(() => {
          this.servicesData = data;
          this.state='done'
        })
      })
      .catch((error) => {
        runInAction(() => {
          this.state = 'error'
        })
      });
  }

  fetchServiceDetails(serviceId) {
    this.state = 'pending';
    fetch(`http://localhost:7070/api/services/${serviceId}`)
      .then(response => response.json())
      .then(data => {
        runInAction(() => {
          this.serviceDetails = data;
          this.state = 'done'
        })
      })
      .catch((error) => {
        runInAction(() => {
          this.state = 'error'
        })
      });
  }

}

export default new Store();

import EventStore from "./eventStore";
import UIStore from "./uiStore";

class RootStore {
  constructor() {
    this.uiStore = new UIStore(this);
    this.eventStore = new EventStore(this);
  }
}

export default new RootStore();
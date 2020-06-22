
import { 
  observable,
  decorate,
  computed,
  action,
  autorun
} from 'mobx';
// 3 layers of state ( Store, Render (view), Action)
// store just needs to listin for actions (i.e. increment count)

class Store {
  @observable theCount;

  constructor() {
    this.count = 0;
  }

  getInitalState() { // get inital state from json file
    fetch('./data/data.json')
      .then(response => response.json())
      .then(data => this.count = data.count)
  }
  //actions for state data store to listen for
  decrementCount() {
    if (this.count > 0) {
      this.count = --this.count;  //decorate this in the decorate function
    }
  }
}

decorate(Store, {
  count: observable,  // just basic state observable that needs to be updated
  decrementCount: action,
  getInitalState: action,

})

export const store = new Store(); //get all web components to pull in store (that needs it)

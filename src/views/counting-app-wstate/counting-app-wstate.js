import { html, LitElement } from 'lit-element'
import { store } from '../../mobx/store.js'; // data store
import { autorun } from 'mobx' 

import './counting-toolbar-wstate.js'

 class CountingAppWState extends LitElement {
  static get properties() {
    return {
      count: {type : Number}
    }
  }
  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();

    this.count = store.getInitalState();

    this.disposer = autorun( () => {  //subscribe to changes of count in state store
      this.count = store.count; // autorun addes event listeners behind scenes
    })
    
  }

  disconnectedCallback() {
    this.disposer();
  }

  render() {
    return html`
      <h1>My Sweet Counting App W State</h1>
      <counting-toolbar-wstate></counting-toolbar-wstate>
      <div>
        <button @click=${ () => store.decrementCount() }>-</button>
        ${this.count}
        <button @click=${() => this.incrementCount() }>+</button>
      </div>
    `;
  }
  incrementCount(){
    //this.count = ++this.count;
    store.count = ++this.count;  //store will instead will tell count when to update
  }
  decrementCount() {
    if ( this.count > 0 ) store.count = --this.count;
  }

}

customElements.define('counting-app-wstate',CountingAppWState)
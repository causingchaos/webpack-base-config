import { html, LitElement } from 'lit-element'
import './counting-toolbar.js'
// without state management. Only using event listeners ect

 class CountingApp extends LitElement {
  static get properties() {
    return {
      count: {type : Number}
    }
  }
  constructor() {
    super();
    this.count = 10;
  }

  //connectedCallback(){
  //  // Code to link up the mobx store
  //}

  render() {
    return html`
    <h1>My Sweet Counting App w.o State</h1>
    <Count-ToolBar></Count-ToolBar>
      <div>
        <button @click=${ () => this.decrementCount() }>-</button>
        ${this.count}
        <button @click=${() => this.incrementCount() }>+</button>
      </div>
    `;
  }
  incrementCount(){
    this.count = ++this.count;

    // Webcomponents methdology ( Props down and events up )
    this.dispatchEvent(new CustomEvent('count-changed', {
      bubbles: true,  // allow event to bubble up in shadow dom
      cancelable: false, // **
      composed: true,    // **
      detail: {
        count: this.count
      }
    }))
  }
  decrementCount() {
    if ( this.count > 0 ) this.count = --this.count;
    // Webcomponents methdology ( Props down and events up )
    this.dispatchEvent(new CustomEvent('count-changed', {
      bubbles: true,  // allow event to bubble up in shadow dom
      cancelable: false, // **
      composed: true,    // **
      detail: {
        count: this.count
      }
    })) 
  }

}

customElements.define('counting-app',CountingApp)
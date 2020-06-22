import { LitElement,html } from 'lit-element';
import { store } from '../../mobx/store';
import { autorun } from 'mobx' 

class CountingToolbarWState extends LitElement {
  static get properties() {
    return {
      count: {type: Number}
    }
  }
  constructor(){
    super()
    this.count = 0;
  }

  connectedCallback() {
    super.connectedCallback();
    this.disposer = autorun( () => {  //subscribe to changes of count in state store
      this.count = store.count; // autorun addes event listeners behind scenes
    })
  }

  disconnectedCallback() {
    this.disposer();
  }

  render() {
    return html`
      Hey there user! You have a count of ${this.count}
      <button @click=${ () => store.count-- } alt="Decrement Count">-</button>
      <button @click=${ () => store.count = 0} alt="Reset Count" >reset</button>
    `;
  }
  
}

customElements.define('counting-toolbar-wstate',CountingToolbarWState);
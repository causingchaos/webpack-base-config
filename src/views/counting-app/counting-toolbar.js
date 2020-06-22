import { LitElement,html } from 'lit-element';

// without state management. Only using event listeners ect

class CountToolbar extends LitElement {
  static get properties() {
    return {
      count: {type: Number}
    }
  }
  constructor(){
    super()
    this.count = 10;
    
    //listen for bubbled event count-changed, and bind the count inside event detail
    window.addEventListener('count-changed', this.countChanged.bind(this)); 
  }

  // required to release event listiner from the window
  disconnectedCallback() {
    window.removeEventListener('count-changed', this.countChanged.bind(this));
  }

  countChanged(e) {
    console.log('e:', e);
    this.count = e.detail.count;
  }

  render() {
    return html`
      Hey there user! You have a count of ${this.count}
      <button @click=${ () => this.count = 0} alt="Reset Count" >reset</button>
    `;
  }
  
}

customElements.define('count-toolbar',CountToolbar);
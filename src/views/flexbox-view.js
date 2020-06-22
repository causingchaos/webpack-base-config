import { LitElement, css, html } from 'lit-element';

//styles
import { flexboxCSS } from '../styles/base-styles.js'

class FlexboxView extends LitElement{
  static get styles() {
    return [ flexboxCSS ]
  }
  render() {
    return html `
      <div class="parent">
        <div class="child1">
          <h1>One</h1>
        </div>
        <div class="child2">
          <h1>Two</h1>
        </div>
        <div class="child3">
          <h1>Three</h1>
        </div>
      </div>
      `
  }
}

customElements.define('flexbox-view', FlexboxView);
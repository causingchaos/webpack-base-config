import { LitElement, html } from 'lit-element';
import '@vaadin/vaadin-app-layout/vaadin-app-layout.js';
import '@vaadin/vaadin-app-layout/vaadin-drawer-toggle.js'
import '@vaadin/vaadin-icons/vaadin-icons.js'
import '@vaadin/vaadin-tabs/vaadin-tab.js';
import '@vaadin/vaadin-tabs/vaadin-tabs.js';
import { Router } from '@vaadin/router';
import { navStyles } from '../styles/nav-styles.js'  // CSS

class NavView extends LitElement{
  static get styles() { return [ navStyles ] }
  render() { return html`
  <vaadin-app-layout primary-section="drawer" class="test3">
    <vaadin-drawer-toggle class="icon" slot="navbar"></vaadin-drawer-toggle>
    <div class="title" slot="navbar">Web Components</div>
    <vaadin-tabs class="tabs" slot="drawer" orientation="vertical">
      <vaadin-tab router-link
        class="tab" router-link type="button"
        @click=${ event => {
        Router.go('./') // window.location.href = "./" caused refresh
        }} >
        <iron-icon icon="vaadin:home"></iron-icon>
        Home
    </vaadin-tab>
    <vaadin-tab router-link type="button" class="tab"
      @click=${ event => { 
        //window.location.href = "./flexbox"
        Router.go('./flexbox'); 
        }} > 
      <iron-icon icon="vaadin:clipboard-text"></iron-icon>
      Flexbox
    </vaadin-tab>
    <vaadin-tab router-link type="button" class="tab"
      @click=${ event => { 
        //window.location.href = "./countingApp"
        Router.go('./countingApp');
      }} >
      <iron-icon icon="vaadin:envelope"></iron-icon>
      Counting-App
    </vaadin-tab>
    <vaadin-tab router-link type="button" class="tab"
      @click=${event => {
        //window.location.href = "./countingAppWState"
        Router.go('./countingAppWState')
        event.preventDefault();
        }} >
      <iron-icon icon="vaadin:envelope"></iron-icon>
      Counting App wState
    </vaadin-tab>
    <vaadin-tab 
      @click=${ this.enableDark }
      router-link type="button" class="tab">
      <iron-icon icon="vaadin:envelope"></iron-icon>
      Dark Mode
    </vaadin-tab>
    </vaadin-button>
    </vaadin-tabs>
  
    <main><slot><!-- Render routed child web components here --></slot></main>

  </vaadin-app-layout>
    `;
  };

  enableDark(){
    //Dark theme work here -- work in progress
    console.log("getting body");
    var shadowRoot = this.shadowRoot.host;
    var superNode = shadowRoot.parentNode;
    var supersuperNode = superNode.parentNode
    supersuperNode.style.background = "black";
    supersuperNode.style.color = "white";
    console.log(supersuperNode);

    console.log("selecting shadow root:")
    console.log(shadowRoot);
    console.log('Selecting nav: ')
    var vaadinAppLayoutNode = this.shadowRoot.querySelector('vaadin-app-layout');
    console.log(vaadinAppLayoutNode);

    var node = vaadinAppLayoutNode.shadowRoot.querySelector('#navbarTop');
    node.style.background = "#333333";
    var node2 = this.shadowRoot.querySelector('.title');
    node2.style.color= "white";
    console.log(node2);
    var node3 = vaadinAppLayoutNode.shadowRoot.querySelector('#drawer');
    node3.style.background = "#333333";

    var tabNode = this.shadowRoot.querySelectorAll('vaadin-tab');
    tabNode.forEach(i => i.style.color="white");
    tabNode[0].style.color="white";
    tabNode[1].style.color="white";
    console.log(tabNode);
  }

};
customElements.define('nav-view',NavView)
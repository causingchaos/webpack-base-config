//======= Test code =============================//
import "./scripts.js"
console.log("Hello World");
import sum from "./sum.js";
//console.log(sum(2,5 ))
console.log(process.env.NODE_ENV)  //enviromntal vars defined in webpack config
console.log(process.env.IP_001) //enviromntal vars defined in webpack config
//========= actual main code ===================//
import './styles/styles.css'  //default styles (doesn't affect shadow DOM)
// WebComponents
import './views/home-view.js';
import './views/flexbox-view.js'
import './views/not-found-view.js'
import './views/nav-view.js'
import './views/counting-app/counting-app.js'
import './views/counting-app-wstate/counting-app-wstate.js'
import { Router } from '@vaadin/router'; //navigation router

window.addEventListener('load', () => {
  initRouter();
});

function initRouter() {
  const router = new Router(document.querySelector('main'));
  router.setRoutes([
    {
      path: '/',
      component: 'nav-view',
      children: [
        {
          path: '/',
          component: 'home-view', 
          //action: () => import(/* webpackChunkName: "todos" */ './views/home-view'),
        },
        {
          path: '/flexbox',
          component: 'flexbox-view'
        },
        {
          path: '/countingApp',
          component: 'counting-app'
        },
        {
          path: '/countingAppWState',
          component: 'counting-app-wstate'
        },
        {
          path: '(.*)',
          component: 'not-found-view'
        }
      ]
    }
  ])
}













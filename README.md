# webpack-base-config
Base webpack webcomponents starter pack

Built with:
Lit-Element
HTML/CSS
Javascript ECMA 2016+
Vaadin web components
Vaadin router (navigation routing)
Mobx for state
Webpack + various webpack loaders + babel transpilers -- Includes Polyfills for old browser support

NOTE: DOES NOT SUPPORT IE, will detect for IE in index.html
NOTE: MUST HAVE JAVASCRIPT ENABLED, will also warn users of this in index.html

Clone repo
Install Node JS
run "npm install"
following scripts are avaliable:  (webpack-dev-server runs on local port 3000)

 "scripts": {
    "start": "webpack-dev-server --config build-utils/webpack.config.js --env.env=dev --disable-host-check",
    "build": "webpack --config build-utils/webpack.config.js --env.env=prod",
    "build:analyze": "npm run build -- --env.addon=bundleanalyze --env.addon=bundlevisualizer",
    "test": "echo \"Error: no test specified\" && exit 1",
    "build:server": "http-server dist"
  },

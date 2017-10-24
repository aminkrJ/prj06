import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import 'font-awesome/css/font-awesome.css';

import 'bootstrap/dist/css/bootstrap.css';
import 'appStrap/assets/css/custom-style.css';
import 'appStrap/assets/css/theme-style.css';

import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Open+Sans:400,700,300', 'Rambla:400,700', 'Calligraffitti', 'Roboto+Slab:400,700']
  }
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

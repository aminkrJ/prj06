import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import 'font-awesome/css/font-awesome.css';

import 'bootstrap/dist/css/bootstrap.css';
import 'appStrap/assets/css/custom-style.css';
import 'appStrap/assets/css/theme-style.css';

import 'izitoast/dist/css/iziToast.css';
import 'nprogress/nprogress.css';

import axios from 'axios';
import WebFont from 'webfontloader';

axios.defaults.baseURL = `${process.env.REACT_APP_API_URL}/api/v1`


WebFont.load({
  google: {
    families: ['Open+Sans:400,700,300', 'Rambla:400,700', 'Calligraffitti', 'Roboto+Slab:400,700']
  }
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

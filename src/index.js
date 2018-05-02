import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import 'babel-polyfill';
import { ConnectedRouter } from 'react-router-redux';

import App from './App';
import store, { history } from './store';
import registerServiceWorker from './registerServiceWorker';

import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'izitoast/dist/css/iziToast.css';
import 'nprogress/nprogress.css';
import './index.css';

import axios from 'axios';
import WebFont from 'webfontloader';

axios.defaults.baseURL = `${process.env.REACT_APP_API_URL}/api/v1`;

WebFont.load({
  google: {
    families: ['Open+Sans:400,700,300', 'Roboto:400,700'],
  },
});

const rootElement = document.getElementById('root');

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  rootElement
);

registerServiceWorker();

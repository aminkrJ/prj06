import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import store, { history } from './store';
import { ConnectedRouter } from 'react-router-redux';

import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'izitoast/dist/css/iziToast.css';
import 'nprogress/nprogress.css';
import './index.css';

import axios from 'axios';
import WebFont from 'webfontloader';

axios.defaults.baseURL = `${process.env.REACT_APP_API_URL}/api/v1`

WebFont.load({
  google: {
    families: ['Open+Sans:400,700,300', 'Rambla:400,700', 'Calligraffitti', 'Roboto+Slab:400,700']
  }
});

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
  , document.getElementById('root'))

registerServiceWorker()

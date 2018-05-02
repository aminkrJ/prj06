import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import reduxReset from 'redux-reset';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import createHistory from 'history/createBrowserHistory';
import { nprogressMiddleware } from 'redux-nprogress';

import rootReducer from './reducers';

export const history = createHistory();

const initialState = {};

const enhancers = [autoRehydrate(), reduxReset()];

const middleware = [
  thunk,
  logger,
  nprogressMiddleware(),
  routerMiddleware(history),
];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

const store = createStore(rootReducer, initialState, composedEnhancers);

persistStore(store);

export default store;

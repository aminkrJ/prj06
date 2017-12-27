import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { nprogress } from 'redux-nprogress';

import cart from './cartReducer'

export default combineReducers({
  routing: routerReducer,
  cart,
  nprogress
})

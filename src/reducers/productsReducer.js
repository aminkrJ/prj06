import * as actions from '../constants/ActionTypes'

const initialState = {
  entities: [],
  isFetching: false,
  didInvalid: false
}

export default function reducer(state = initialState, action){
  switch (action.type){
    case actions.FETCH_PRODUCTS:
      return Object.assign({}, state, {
        isFetching: true
      })
    case actions.FETCH_PRODUCTS_FULFILLED:
      return Object.assign({}, state, {
        isFetching: false,
        entities: action.products
      })
    case actions.FETCH_PRODUCTS_REJECTED:
      return Object.assign({}, state, {
        isFetching: false
      })
    default:
      return state
  }
}

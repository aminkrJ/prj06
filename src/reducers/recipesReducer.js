import * as actions from '../constants/ActionTypes'

const initialState = {
  entities: [],
  isFetching: false,
  didInvalid: false
}

export default function reducer(state = initialState, action){
  switch (action.type){
    case actions.FETCH_RECIPES:
      return Object.assign({}, state, {
        isFetching: true
      })
    case actions.FETCH_RECIPES_FULFILLED:
      return Object.assign({}, state, {
        isFetching: false,
        entities: action.recipes
      })
    case actions.FETCH_RECIPES_REJECTED:
      return Object.assign({}, state, {
        isFetching: false
      })
    default:
      return state
  }
}

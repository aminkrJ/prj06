import * as actions from '../constants/ActionTypes';

const initialState = {
  entities: [],
  isFetching: false,
  didInvalid: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.FETCH_ARTICLES:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case actions.FETCH_ARTICLES_FULFILLED:
      return {
        ...state,
        isFetching: false,
        entities: action.articles,
      };
    case actions.FETCH_ARTICLES_REJECTED:
      return Object.assign({}, state, {
        isFetching: false,
      });
    default:
      return state;
  }
}

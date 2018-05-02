import axios from 'axios';
import { beginTask, endTask } from 'redux-nprogress';
import api from '../Api';
import * as actions from '../constants/ActionTypes';

export function fetchArticles() {
  return function(dispatch) {
    dispatch({ type: actions.FETCH_ARTICLES });

    dispatch(beginTask());

    api
      .get('/articles')
      .then(response => {
        dispatch({
          type: actions.FETCH_ARTICLES_FULFILLED,
          articles: response.data,
        });

        dispatch(endTask());
      })
      .catch(error => {
        dispatch({ type: actions.FETCH_ARTICLES_REJECTED, error: error });

        dispatch(endTask());

        // TODO display error message
      });
  };
}

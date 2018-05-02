import axios from 'axios';
import { beginTask, endTask } from 'redux-nprogress';
import api from '../Api';
import * as actions from '../constants/ActionTypes';

export function fetchRecipes() {
  return function(dispatch) {
    dispatch({ type: actions.FETCH_RECIPES });

    dispatch(beginTask());

    api
      .get('/recipes')
      .then(response => {
        dispatch({
          type: actions.FETCH_RECIPES_FULFILLED,
          recipes: response.data,
        });

        dispatch(endTask());
      })
      .catch(error => {
        dispatch({ type: actions.FETCH_RECIPES_REJECTED, error: error });

        dispatch(endTask());

        // TODO display error message
      });
  };
}

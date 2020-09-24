import { ADD_TASK_PENDING, ADD_TASK_SUCCESS } from './constants.js';

export const addTask = () => (dispatch) => {
  dispatch({ type: ADD_TASK_PENDING });
  console.log('Fetching tasks from API...'); // this will be replaced by fetch to API
  dispatch({ type: ADD_TASK_SUCCESS, payload: ['work on your app!'] });
};

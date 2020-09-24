import {
  ADD_TASK_PENDING,
  ADD_TASK_SUCCESS,
  ADD_TASK_FAILED,
} from './constants.js';

const initialTasksState = {
  isPending: false,
  tasks: [],
  error: '',
};

export const addTask = (state = initialTasksState, action = {}) => {
  switch (action.type) {
    case ADD_TASK_PENDING:
      return {
        ...state,
        ...{ isPending: true },
      };
    case ADD_TASK_SUCCESS:
      return {
        ...state,
        ...{ tasks: action.payload, isPending: false },
      };
    case ADD_TASK_FAILED:
      return {
        ...state,
        ...{ error: action.payload, isPending: false },
      };
    default:
      return state;
  }
};

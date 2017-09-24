import { combineReducers } from 'redux';

function task(state = [], action) {
  let index;
  switch (action.type) {
    case 'ADD_ALL_TASK':
      return [...state, ...action.tasks];
    case 'CREATE_TASK':
      return [...state, action.task];
    case 'REMOVE_TASK':
      index = state.findIndex(task => task.id === action.id);
      state.splice(index, 1);
      return [...state];
    case 'UPDATE_TASK':
      index = state.findIndex(task => task.id === action.id);
      state[index] = { ...state[index], state: action.state };
      return [...state];
    default:
      return state;
  }
}

export default combineReducers({
  task
});

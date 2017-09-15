import { combineReducers } from 'redux';

function task(state = [], action) {
  switch (action.type) {
    case 'ADD_ALL_TASK':
      return [...state, ...action.tasks];
    case 'CREATE_TASK':
      return [...state, action.text];
    case 'REMOVE_TASK':
      state.splice(action.index, 1);
      return [...state];
    case 'UPDATE_TASK':
      const task = state[action.index];
      state[action.index] = { ...task, state: action.state };
      return [...state];
    default:
      return state;
  }
}

export default combineReducers({
  task
});

import { combineReducers } from 'redux';

function task(state = [], action) {
  console.log('into reducer', action)
  switch (action.type) {
    case 'ADD_TASK':
      return [...state, action.text];
    case 'REMOVE_TASK':
      console.log('asdasd')
      state.splice(action.index, 1)
      return [ ...state ];
    default:
      return state;
  }
}


export default combineReducers({
  task,
});

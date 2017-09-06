import { combineReducers } from 'redux';

function share(state = [], action) {
  console.log('here', action)
  switch (action.type) {
    case 'ADD_SHARE':
      return [...state, action.text];
    default:
      return state;
  }
}

export default combineReducers({
  share,
});

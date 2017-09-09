import { combineReducers } from 'redux';

function share(state = [], action) {
  console.log('into reducer', action)
  switch (action.type) {
    case 'ADD_SHARE':
      return [...state, action.text];
    case 'REMOVE_SHARE':
      console.log('asdasd')
      state.splice(action.index, 1)
      return [ ...state ];
    default:
      return state;
  }
}


export default combineReducers({
  share,
});

import { combineReducers } from 'redux';

const userReducer = (state = { user: null }, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return { ...state, user: action.data };
    case 'LOGGEDIN_USER':
      return { ...state, user: action.data };
    case 'LOGOUT_USER':
      return { ...state, user: null };  
    default:
      return state;
  }
};
 
function task(state = [], action) {
  let index;
  switch (action.type) {
    case 'ADD_ALL_TASK':
      return [...state, ...action.tasks];
    case 'CREATE_TASK':
      return [...state, action.task];
    case 'REMOVE_TASK':
      index = state.findIndex(task => task.des === action.id);
      state.splice(index, 1);
      return [...state];
    case 'UPDATE_TASK':
      index = state.findIndex(task => task.des ===  action.id);
      state[index] = { ...state[index], state: action.state };
      return [...state];
    default:
      return state;
  }
}

const error = (state ={ }, action) => {
  switch (action.type) {
    case 'ERROR':
    return [ ...state, action.data ]; 
    default:
      return state;
  }
};

export default combineReducers({
  error:error,  
  user: userReducer,
  task: task,
});

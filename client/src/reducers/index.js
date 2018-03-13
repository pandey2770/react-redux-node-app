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
      return [...action.tasks];
    case 'CREATE_TASK':
      return [...state, action.task];
    case 'REMOVE_TASK':
      index = state.findIndex(task => task.des === action.id);
      state.splice(index, 1);
      return [...state];
    case 'UPDATE_TASK':
      index = state.findIndex(task => task.des === action.id);
      state[index] = { ...state[index], state: action.state };
      return [...state];
    default:
      return state;
  }
}

const error = (state = {}, action) => {
  switch (action.type) {
    case 'ERROR':
      return [...state, action.data];
    case 'NOT':
      return [...state, action.data];
    case 'RESET':
      return [...state];
    case 'OTOERROR':
      return [...state, action.data];
    default:
      return state;
  }
};

const popUp = (
  state = { showForget: false, showReset: false, pwd: false },
  action
) => {
  switch (action.type) {
    case 'FORGET':
      return { ...state, showForget: true, showReset: false, pwd: false };
    case 'CLOSE':
      return { ...state, showForget: false, showReset: false, pwd: false };
    case 'RESET':
      return { ...state, showForget: false, showReset: true, pwd: false };
    case 'NEWPWD':
      return { ...state, showForget: false, showReset: true, pwd: true };
    default:
      return state;
  }
};

export default combineReducers({
  error: error,
  user: userReducer,
  task: task,
  popUp: popUp
});

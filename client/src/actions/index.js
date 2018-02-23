import axios from 'axios';

// login user

export const loginUser = (username, password, history) => {
  return async function(dispatch) {
    axios.post('/api/login', { username, password }).then(
      ({ data }) => {
        history.push('/');
        return dispatch(loginUserDispatch(data));
      },
      () => {
        alert("Please don't force me enter the right Password or Email else ");
      }
    );
  };
};

export const loginUserDispatch = data => {
  return {
    type: 'LOGIN_USER',
    data
  };
};

// loginUser

export const getUser = () => {
  return async function(dispatch) {
    const { data } = await axios.get('/api/user');
    return dispatch(getUserDispatch(data));
  };
};

// logOutUser
export const logoutUser = history => {
  return async function(dispatch) {
    axios.get('/api/logout').then(({ data }) => {
      history.push('/login');
      return dispatch(getLogoutDispatch(data));
    });
  };
};

export const getLogoutDispatch = () => {
  return {
    type: 'LOGOUT_USER'
  };
};

// SignUp User

export const signUp = (history, username, name, password) => {
  return async function(dispatch) {
    axios.post('/api/signUp', { username, name, password }).then(() => {
      history.push('/');
      return dispatch(getUserDispatch({ email: username }));
    },
    response => {
      return dispatch(alert('class'));
    });
  };
};

export const getUserDispatch = data => {
  return {
    type: 'LOGGEDIN_USER',
    data
  };
};

export const alert = data => {
  return {
    type: 'ERROR',
    data
  };
};
// Fetch tasks from backend
export const getTasks = () => {
  return async function(dispatch) {
    const { data } = await axios.get('/api/tasks');
    return dispatch(getTasksDispatch(data));
  };
};

export const getTasksDispatch = tasks => {
  return {
    type: 'ADD_ALL_TASK',
    tasks
  };
};

// Create a new task
export const dispatchCreateTask = task => {
  return {
    type: 'CREATE_TASK',
    task
  };
};

export const createTask = task => {
  return async function(dispatch) {
    const taskId = await axios.post('/api/tasks/', { task });
    const newTask = { id: taskId, ...task };
    return dispatch(dispatchCreateTask(newTask));
  };
};

// Delete a task
export const deleteTask = id => {
  return async function(dispatch) {
    await axios.delete(`/api/tasksDelete/${id}`);
    return dispatch(deleteTaskDispatch(id));
  };
};

export const deleteTaskDispatch = id => {
  return {
    type: 'REMOVE_TASK',
    id
  };
};

export const updateTask = (id, state) => {
  return async function(dispatch) {
    await axios.put('/api/tasks', {id, state });
    return dispatch(updateTaskDispatch(id, state));
  };
};

export const updateTaskDispatch = (id, state) => {
  return {
    type: 'UPDATE_TASK',
    id,
    state
  };
};

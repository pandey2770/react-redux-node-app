import axios from 'axios';

// login user
export const loginUser = (username, password) => {
  console.log(username,password)
  return async function(dispatch) {
    await axios.post('/api/login', { username, password });
    return dispatch(loginUserDispatch({ email: username }));
  };
};

export const loginUserDispatch = data => {
  return {
    type: 'LOGIN_USER',
    data
  };
};

// export const logoutUser = history => {
//   return async function(dispatch) {
//     await axios.get('/api/logout');
//     return dispatch(logoutUserDispatch());
//   };
// };

// export const logoutUserDispatch = () => {
//   return {
//     type: 'LOGOUT_USER'
//   };
// };

// SignUp User

export const signUp = (history, username, name,password) => {
  return async function(dispatch) {
    axios.post('/api/signUp', { username, name,password }).then(
      () => {
        return dispatch(getUserDispatch({ email: username }));
      },
    );
  };
};

export const getUserDispatch = data => {
  return {
    type: 'LOGGEDIN_USER',
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
    await axios.delete(`/api/tasks/${id}`);
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
    await axios.put(`/api/tasks/${id}`, { state });
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

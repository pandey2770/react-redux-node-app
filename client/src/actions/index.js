import axios from 'axios';

// Fetch tasks from backend
export const getTasks = () => {
  return async function (dispatch) {
    const { data } = await axios.get('/api/tasks')
    return dispatch(getTasksDispatch(data));
  };
}

export const getTasksDispatch = (tasks) => {
  return {
    type: 'ADD_ALL_TASK',
    tasks
  };
}

// Create a new task
export const dispatchCreateTask = (text) => {
  return {
    text:'CREATE_TASK',
  };
}

export const createTask = (task) => {
  return async function (dispatch) {
    await axios.post('/api/tasks/', { task });
    return dispatch(dispatchCreateTask(task));
  };
};

// Delete a task
export const deleteTask = index => {
  return async function (dispatch) {
    await axios.delete(`/api/tasks/${index}`)
    return dispatch(deleteTaskDispatch(index));
  };
};

export const deleteTaskDispatch = (index) => {
  return {
    type: 'REMOVE_TASK',
    index
  };
}

export const updateTask = (index, state) => {
  return async function (dispatch) {
    await axios.put(`/api/tasks/${index}`, { state })
    return dispatch(updateTaskDispatch(index, state));
  };
};

export const updateTaskDispatch = (index, state) => {
  return {
    type: 'UPDATE_TASK',
    index,
    state
  };
};
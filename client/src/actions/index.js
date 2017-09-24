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
export const dispatchCreateTask = (task) => {
  return {
    type:'CREATE_TASK',
    task
  };
}

export const createTask = (task) => {
  return async function (dispatch) {
    const taskId = await axios.post('/api/tasks/', { task });
    const newTask = { id: taskId, ...task}
    return dispatch(dispatchCreateTask(newTask));
  };
};

// Delete a task
export const deleteTask = id => {
  return async function (dispatch) {
    await axios.delete(`/api/tasks/${id}`)
    return dispatch(deleteTaskDispatch(id));
  };
};

export const deleteTaskDispatch = (id) => {
  return {
    type: 'REMOVE_TASK',
    id
  };
}

export const updateTask = (id, state) => {
  return async function (dispatch) {
    await axios.put(`/api/tasks/${id}`, { state })
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
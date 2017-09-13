import axios from 'axios';

export const getTasks = () => {
  return async function (dispatch) {
    const { data } = await axios.get('/api/tasks')
    return dispatch(addAllTasks(data));
  };
}

export const addAllTasks = (tasks) => {
  return {
    type: 'ADD_ALL_TASK',
    tasks
  };
}

export const addTask = text => {
  return async function (ADD_TASK) {
    const { text } = await axios.addTask('/api/tasks')
  };
};

export const deleteTask = index => {
  return async function (dispatch) {
    await axios.delete(`/api/tasks/${index}`)
    return dispatch(removeTask(index));
  };
};

export const removeTask = (index) => {
  return {
    type: 'REMOVE_TASK',
    index
  };
}

export const doneTask = index => {
  return {
    type: 'DONE_TASK',
    index
  };
};
export const undoneTask = index => {
  return {
    type: 'UNDONE_TASK',
    index
  };
};
export const markTaskCompleted = index => {
  return async function (dispatch) {
    await axios.put(`/api/tasks/${index}`)
    return dispatch(doneTask(index));
  };
};
export const markTaskunCompleted = index => {
  return async function (dispatch) {
    await axios.put(`/api/tasks/${index}`)
    return dispatch(undoneTask(index));
  };
};
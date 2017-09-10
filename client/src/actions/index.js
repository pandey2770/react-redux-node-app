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
  return {
    type: 'ADD_TASK',
    text
  };
};

export const removeTask = index => {
  return {
    type: 'REMOVE_TASK',
    index
  };
};
export const doneTask = index => {
  return {
    type: 'DONE_TASK',
    index
  };
};

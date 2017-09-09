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

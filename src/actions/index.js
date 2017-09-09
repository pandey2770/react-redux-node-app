export const addTask = (text) => {
  return {
    type: 'ADD_TASK',
    text
  }
}

export const removeTask = (index) => {
  console.log('into action class')
  return {
    type: 'REMOVE_TASK',
    index
  }
}

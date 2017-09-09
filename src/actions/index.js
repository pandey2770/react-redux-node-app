export const addShare = (text) => {
  return {
    type: 'ADD_SHARE',
    text
  }
}

export const removeShare = (index) => {
  console.log('into action class')
  return {
    type: 'REMOVE_SHARE',
    index
  }
}

export const addShare = (text) => {
  console.log('addshare', text)
  return {
    type: 'ADD_SHARE',
    text
  }
}

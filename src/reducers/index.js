const nowPlaying = (state = null, action) => {
  switch (action.type) {
    case 'SET_SOUND':
      return action.sound
    default:
      return state
  }
}
export default nowPlaying

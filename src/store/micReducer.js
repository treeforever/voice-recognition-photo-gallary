const defaultState = {
  micOn: false
}

export default function reducer (state = defaultState, action) {
  // console.log('sttttt type is', action.type)
  switch (action.type) {
    case 'TURN_ON_MIC': {
      return {
        ...state,
        micOn: true
      }
    }

    case 'TURN_OFF_MIC': {
      return {
        ...state,
        micOn: false
      }
    }

    default:
      return state
  }
}

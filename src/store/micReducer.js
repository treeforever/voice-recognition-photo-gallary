const defaultState = {
  micOn: false
}

export default function reducer (state = defaultState, action) {
  switch (action.type) {
    case 'TURN_ON_MIC': {
      console.log('yes')
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

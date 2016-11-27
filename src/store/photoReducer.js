const defaultState = {
}

export default function reducer (state = defaultState, action) {
  switch (action.type) {
    case 'HELLO': {
      return {
        ...state
      }
    }

    case 'SHOW_A_PHOTO': {
      return {
        ...state
      }
    }

    case 'SHOW_PHOTOS': {
      return {
        ...state
      }
    }

    default:
      return state
  }
}

const defaultState = {
    helloWorld: null
}

export default function reducer (state = defaultState, action) {
  switch (action.type) {
    case 'HELLO_WORLD': {
        return {
            ...state,
            helloWorld: true
        }
    }
  }
}
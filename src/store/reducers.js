import { combineReducers } from 'redux'
import mic from './micReducer'
import photo from './photoReducer'

export const rootReducer = (asyncReducers) => {
  return combineReducers({
    mic,
    photo
  })
}

export default rootReducer

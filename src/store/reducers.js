import { combineReducers } from 'redux'
import mic from './micReducer'

export const rootReducer = (asyncReducers) => {
  return combineReducers({
    mic
  })
}

export default rootReducer

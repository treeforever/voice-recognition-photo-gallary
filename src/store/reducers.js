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

import { routerReducer as router } from 'react-router-redux'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    // Add sync reducers here
    router,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
import { combineReducers } from 'redux'
import appReducer from './appReducer'
import tripsScreenReducer from './tripsScreenReducer'
import uiReducer from './uiReducer'

const rootReducer = combineReducers({
  app: appReducer,
  trips: tripsScreenReducer,
  ui: uiReducer,
})

export default rootReducer

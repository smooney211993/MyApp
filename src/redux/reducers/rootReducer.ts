import { combineReducers } from 'redux'
import { PersistedState } from 'redux-persist'
import appReducer from './appReducer'
import tripsScreenReducer from './tripsScreenReducer'
import uiReducer from './uiReducer'

const rootReducer = combineReducers({
  app: appReducer,
  trips: tripsScreenReducer,
  ui: uiReducer,
})

export type RootReducerState = PersistedState & ReturnType<typeof rootReducer>
export default rootReducer

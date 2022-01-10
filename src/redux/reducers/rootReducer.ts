import { combineReducers } from 'redux'
import { PersistedState } from 'redux-persist'
import appReducer from './appReducer'
import tripsScreenReducer from './tripsScreenReducer'

const rootReducer = combineReducers({
  app: appReducer,
  trips: tripsScreenReducer,
})

export type RootReducerState = PersistedState & ReturnType<typeof rootReducer>
export default rootReducer

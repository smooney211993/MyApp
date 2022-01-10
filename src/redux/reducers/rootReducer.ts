import { combineReducers } from 'redux'
import { PersistedState } from 'redux-persist'
import appReducer from './appReducer'

const rootReducer = combineReducers({
  app: appReducer,
})

export type RootReducerState = PersistedState & ReturnType<typeof rootReducer>
export default rootReducer

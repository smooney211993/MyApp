import AsyncStorage from '@react-native-async-storage/async-storage'
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from 'redux-persist/es/constants'
import rootReducer from './reducers/rootReducer'

/**
 *Redux Persist is used to save a local instance of redux state into Async Storage
 */

const defaultMiddleware = getDefaultMiddleware({
  immutableCheck: {
    warnAfter: 500,
  },
  serializableCheck: {
    ignoredActions: [FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE],
  },
})

// Used for flipper. Allows flipper to inspect redux state
const createDebugger = require('redux-flipper').default
defaultMiddleware.push(createDebugger())

// returns an enhanced reducer
const persistentReducer = persistReducer(
  {
    key: 'root',
    version: 1,
    storage: AsyncStorage,
    whitelist: ['app'], // Only persist this reducer. We are only going to store data that is persisted here
  },
  rootReducer
)

// Create the redux store with the enhanced reducer.
const store = configureStore({
  reducer: persistentReducer,
  middleware: defaultMiddleware,
})

// Returns the persisted store that the app will consume
const persistor = persistStore(store)

// Infer the Rootstate and AppDispatch from the store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export { persistor, store }

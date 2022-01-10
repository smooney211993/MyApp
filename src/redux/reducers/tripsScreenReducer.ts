import { createAction, createReducer } from '@reduxjs/toolkit'
import { ApiStatus, Trip } from '../../types/apiTypes'
import { setTrips } from './appReducer'

interface State {
  trips: Trip[]
  apiStatus: ApiStatus
}

const initialState: State = {
  trips: [],
  apiStatus: 'init',
}

export const setApiStatus = createAction<ApiStatus>('app/setApiStatus')

export default createReducer(initialState, builder => {
  builder.addCase(setTrips, (state, { payload }) => {
    state.trips = payload
  })

  builder.addCase(setApiStatus, (state, { payload }) => {
    state.apiStatus = payload
  })
})

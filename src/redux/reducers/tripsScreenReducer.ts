import { createAction, createReducer } from '@reduxjs/toolkit'
import { ApiStatus, Trip } from '../../types/apiTypes'

interface State {
  trips: Trip[]
  apiStatus: ApiStatus
}

const initialState: State = {
  trips: [],
  apiStatus: 'init',
}
export const setTrips = createAction<Trip[]>('tripScreenReducer/setTrips')
export const setApiStatus = createAction<ApiStatus>('tripScreenReducer/setApiStatus')

export default createReducer(initialState, builder => {
  builder.addCase(setTrips, (state, { payload }) => {
    state.trips = payload
  })

  builder.addCase(setApiStatus, (state, { payload }) => {
    state.apiStatus = payload
  })
})

import { createAction, createReducer } from '@reduxjs/toolkit'
import { Trip } from '../../types/apiTypes'

interface State {
  trips: Trip[]
}

const initialState: State = {
  trips: [],
}
export const setTrips = createAction<Trip[]>('app/setTrips')

export default createReducer(initialState, builder => {
  builder.addCase(setTrips, (state, { payload }) => {
    state.trips = payload
  })
})

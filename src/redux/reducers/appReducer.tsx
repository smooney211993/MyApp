import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Trip } from '../../types/apiTypes'

interface InitialState {
  trips: Trip[]
}

const initialState = { trips: [] } as InitialState

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setTrips(state, { payload }: PayloadAction<Trip[]>) {
      state.trips = payload
    },
  },
})

export const { setTrips } = appSlice.actions
export default appSlice.reducer

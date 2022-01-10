import { createAction, createReducer } from '@reduxjs/toolkit'
import { ApiStatus, Trip } from '../../types/apiTypes'

interface State {
  apiStatus: ApiStatus
}

const initialState: State = {
  apiStatus: 'init',
}

export const setApiStatus = createAction<ApiStatus>('tripScreenReducer/setApiStatus')

export default createReducer(initialState, builder => {
  builder.addCase(setApiStatus, (state, { payload }) => {
    state.apiStatus = payload
  })
})

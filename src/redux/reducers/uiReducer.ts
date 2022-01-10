import { createAction, createReducer } from '@reduxjs/toolkit'
import { AppStateStatus } from 'react-native'

interface State {
  isSplashedViewed: boolean
  appState: AppStateStatus
}

const initialState: State = {
  isSplashedViewed: false,
  appState: 'unknown',
}

export const splashedViewed = createAction('app/splashedViewed')
export const setAppState = createAction<AppStateStatus>('app/setAppState')

export default createReducer(initialState, builder => {
  builder.addCase(splashedViewed, state => {
    state.isSplashedViewed = true
  })

  builder.addCase(setAppState, (state, { payload }) => {
    state.appState = payload
  })
})

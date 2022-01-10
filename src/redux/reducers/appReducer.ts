import { createAction, createReducer } from '@reduxjs/toolkit'

interface State {
  isSplashedViewed: boolean
}

const initialState: State = {
  isSplashedViewed: false,
}

export const splashedViewed = createAction('app/splashedViewed')

export default createReducer(initialState, builder => {
  builder.addCase(splashedViewed, state => {
    state.isSplashedViewed = true
  })
})

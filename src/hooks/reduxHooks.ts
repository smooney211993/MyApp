import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { RootState, AppDispatch } from '../redux/store'

//Pre-typed redux hooks versions to use throughout in the app
//https://react-redux.js.org/using-react-redux/usage-with-typescript
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

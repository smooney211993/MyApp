import { useEffect, useRef, useCallback } from 'react'
import { AppState, AppStateStatus } from 'react-native'
import { useAppDispatch } from './reduxHooks'
import { setAppState } from '../redux/reducers/uiReducer'

/**
 * A hook that Detect when an App pushed to the Background or pushed to the Foreground.
 * The Appstate will be saved to redux state.
 * Refer to https://reactnative.dev/docs/appstate
 */
function useAppStateListener() {
  const dispatch = useAppDispatch()
  const appStateRef = useRef<AppStateStatus | null>(AppState.currentState)

  const handleAppStateChange = useCallback(
    (nextAppState: AppStateStatus) => {
      if (appStateRef?.current?.match(/inactive|background/) && nextAppState === 'active') {
        dispatch(setAppState('active'))
      }

      if (appStateRef?.current?.match(/active|foreground/) && nextAppState === 'inactive') {
        dispatch(setAppState('inactive'))
      }

      appStateRef.current = nextAppState
    },
    [dispatch]
  )

  useEffect(() => {
    const subscription = AppState.addEventListener('change', handleAppStateChange)
    return () => {
      subscription.remove()
    }
  }, [handleAppStateChange])
}

export default useAppStateListener

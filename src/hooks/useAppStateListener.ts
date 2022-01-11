import { useEffect, useRef, useCallback, useLayoutEffect } from 'react'
import { AppState, AppStateStatus } from 'react-native'

/**
 * A hook that Detect when an App pushed to the Background or pushed to the Foreground.
 * It takes in anActiveCallback and onInActiveCallback which is called respectively on app state.
 * Refer to https://reactnative.dev/docs/appstate
 */
function useAppStateListener(
  onActiveCallback?: (() => void) | undefined,
  onInActiveCallback?: (() => void) | undefined
) {
  const appStateRef = useRef<AppStateStatus | null>(AppState.currentState)
  const onActiveCallbackRef = useRef<(() => void) | undefined>(onActiveCallback)
  const onInActiveCallbackRef = useRef<(() => void) | undefined>(onInActiveCallback)

  // UseLayoutEffect ensures that these refs are always set before any other code runs
  useLayoutEffect(() => {
    onActiveCallbackRef.current = onActiveCallback
    onInActiveCallbackRef.current = onInActiveCallback
  }, [onActiveCallback, onInActiveCallback])

  // Memoize callback to avoid re-renders in the useEffect
  const handleAppStateChange = useCallback((nextAppState: AppStateStatus) => {
    if (appStateRef?.current?.match(/inactive|background/) && nextAppState === 'active') {
      console.log('app is now in the foreground')
      onActiveCallbackRef?.current?.()
    }

    if (appStateRef?.current?.match(/active|foreground/) && nextAppState === 'inactive') {
      console.log('app is now in the background')
      onInActiveCallbackRef?.current?.()
    }

    appStateRef.current = nextAppState
  }, [])

  useEffect(() => {
    const subscription = AppState.addEventListener('change', handleAppStateChange)
    return () => {
      subscription.remove()
    }
  }, [handleAppStateChange])
}

export default useAppStateListener

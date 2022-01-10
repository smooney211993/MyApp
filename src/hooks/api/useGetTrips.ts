import { useCallback, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../reduxHooks'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { delay } from '../../helpers/promiseHelper'
import tripsList from '../../../trip-list.json'
import { Trip } from '../../types/apiTypes'
import { setApiStatus } from '../../redux/reducers/tripsScreenReducer'
import { setTrips } from '../../redux/reducers/appReducer'

// Mocks an api request
const getMockApi = async (): Promise<Trip[]> => {
  await delay(2000)
  return tripsList
}

/**
 *A hook that fetches the tripLists when the screen is in focus and the apiStatus state is 'init'
 *If apiStatus has failed, it sets back to 'init' when navigating away from the screen so it can retry on next screen focus.
 */

function useGetTrips() {
  const navigation = useNavigation()
  const dispatch = useAppDispatch()
  const { apiStatus } = useAppSelector(state => state.trips)

  // When the screen is in focus and the apiStatus is 'init' fetch the tripList data
  useFocusEffect(
    useCallback(() => {
      let isMounted = true
      const getTrips = async () => {
        if (apiStatus === 'init') {
          try {
            const response = await getMockApi()
            if (isMounted) {
              dispatch(setTrips(response))
              dispatch(setApiStatus('success'))
            }
          } catch (e) {
            console.warn('Failed to retrieve trips')
            isMounted && setApiStatus('fail')
          }
        }
      }
      getTrips()
      return () => {
        isMounted = false
      }
    }, [apiStatus, dispatch])
  )

  // If the fetch request has failed, we want to set the apiStatus back to 'init' when moving away from the screen.
  // This ensures that it can retry when navigating back to the screen.
  useEffect(() => {
    return navigation.addListener('blur', () => {
      if (apiStatus === 'fail') {
        dispatch(setApiStatus('init'))
      }
    })
  }, [apiStatus, dispatch, navigation])
}

export default useGetTrips

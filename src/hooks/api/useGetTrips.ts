import { useCallback } from 'react'
import { useAppDispatch, useAppSelector } from '../reduxHooks'
import { useFocusEffect } from '@react-navigation/native'
import { delay } from '../../helpers/promiseHelper'
import tripsList from '../../../trip-list.json'
import { Trip } from '../../types/apiTypes'
import { setApiStatus } from '../../redux/reducers/tripsScreenReducer'
import { setTrips } from '../../redux/reducers/tripsScreenReducer'

// Mocks an api request
const getMockApi = async (): Promise<Trip[]> => {
  await delay(2000)
  return tripsList
}

function useGetTrips() {
  const dispatch = useAppDispatch()
  const { apiStatus } = useAppSelector(state => state.trips)

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
}

export default useGetTrips

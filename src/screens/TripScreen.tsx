import React from 'react'
import { View, StyleSheet } from 'react-native'
import useGetTrips from '../hooks/api/useGetTrips'
import { useAppSelector } from '../hooks/reduxHooks'
import LoadingSpinner from '../components/LoadingSpinner'

const styles = StyleSheet.create({
  pageView: {
    flex: 1,
    backGroundColor: 'white',
  },
})

const TripScreen: React.FC = () => {
  useGetTrips()
  const { apiStatus } = useAppSelector(state => state.trips)
  return (
    <>
      <View style={styles.pageView}>
        <LoadingSpinner isLoading={apiStatus === 'init'} />
      </View>
    </>
  )
}

export default TripScreen

import React from 'react'
import { View, StyleSheet } from 'react-native'
import useGetTrips from '../hooks/api/useGetTrips'

const styles = StyleSheet.create({
  pageView: {
    flex: 1,
    backGroundColor: 'white',
  },
})

const TripScreen: React.FC = () => {
  useGetTrips()
  return <View style={styles.pageView} />
}

export default TripScreen

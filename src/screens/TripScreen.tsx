import React, { useCallback } from 'react'
import { View, StyleSheet, FlatList, ListRenderItem, StatusBar, SafeAreaView } from 'react-native'
import useGetTrips from '../hooks/api/useGetTrips'
import { useAppSelector } from '../hooks/reduxHooks'
import LoadingSpinner from '../components/LoadingSpinner'
import { Trip } from '../types/apiTypes'
import TripListItem from '../components/TripListItem'

const styles = StyleSheet.create({
  pageView: {
    flex: 1,
    backGroundColor: 'white',
  },
})

const TripScreen: React.FC = () => {
  useGetTrips()
  const { apiStatus } = useAppSelector(state => state.trips)
  const { trips } = useAppSelector(state => state.app)
  const keyExtractor = useCallback((item: Trip) => item.id, [])
  const renderItem: ListRenderItem<Trip> = useCallback(({ item }) => <TripListItem trip={item} />, [])
  return (
    <>
      <SafeAreaView>
        <StatusBar />
      </SafeAreaView>
      <View style={styles.pageView}>
        <FlatList data={trips} renderItem={renderItem} keyExtractor={keyExtractor} />
        <LoadingSpinner isLoading={apiStatus === 'init'} />
      </View>
    </>
  )
}

export default TripScreen

import React from 'react'
import { View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  pageView: {
    flex: 1,
    backGroundColor: 'white',
  },
})

const TripScreen: React.FC = () => {
  return <View style={styles.pageView} />
}

export default TripScreen

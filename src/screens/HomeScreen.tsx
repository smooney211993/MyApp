import React from 'react'
import { View, StyleSheet } from 'react-native'
import triplists from '../../trip-list.json'

const styles = StyleSheet.create({
  pageView: {
    flex: 1,
    backGroundColor: 'white',
  },
})

export const HomeScreen: React.FC = () => {
  console.log(triplists)
  return <View style={styles.pageView} />
}

export default HomeScreen

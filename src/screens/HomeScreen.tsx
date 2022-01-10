import React from 'react'
import { View } from 'react-native'

const styles = {
  pageView: {
    flex: 1,
    backGroundColor: 'white',
  },
}

export const HomeScreen: React.FC = () => {
  return <View style={styles.pageView} />
}

export default HomeScreen

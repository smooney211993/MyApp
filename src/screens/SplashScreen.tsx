import React, { useEffect } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { useDispatch } from 'react-redux'
import { splashedViewed } from '../redux/reducers/uiReducer'

const styles = StyleSheet.create({
  pageView: {
    flex: 1,
    backGroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

const SplashScreen: React.FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    setTimeout(() => dispatch(splashedViewed()), 1000)
  }, [dispatch])

  return (
    <View style={styles.pageView}>
      <Text>Freely</Text>
    </View>
  )
}

export default SplashScreen

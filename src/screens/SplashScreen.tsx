import React, { useEffect } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { useDispatch } from 'react-redux'
import { splashedViewed } from '../redux/reducers/uiReducer'
import fonts from '../constants/fonts'
import colors from '../constants/colors'

const styles = StyleSheet.create({
  pageView: {
    flex: 1,
    backGroundColor: colors.SCREEN_BACKGROUND,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: colors.TEXT,
    fontSize: 100,
    fontFamily: fonts.sfProDisplayRegular,
  },
})

const SplashScreen: React.FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    setTimeout(() => dispatch(splashedViewed()), 1000)
  }, [dispatch])

  return (
    <View style={styles.pageView}>
      <Text style={styles.title}>Freely</Text>
    </View>
  )
}

export default SplashScreen

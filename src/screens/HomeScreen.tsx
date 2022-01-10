import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import colors from '../constants/colors'
import fonts from '../constants/fonts'

const styles = StyleSheet.create({
  pageView: {
    flex: 1,
    backGroundColor: colors.SCREEN_BACKGROUND,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontFamily: fonts.sfProDisplayRegular,
    fontSize: 20,
  },
})

export const HomeScreen: React.FC = () => {
  return (
    <View style={styles.pageView}>
      <Text>Home</Text>
    </View>
  )
}

export default HomeScreen

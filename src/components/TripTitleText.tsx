import React from 'react'
import { StyleSheet, Text } from 'react-native'
import fonts from '../constants/fonts'
import uiConstants from '../constants/uiConstants'

type Props = {
  name: string
}

const styles = StyleSheet.create({
  titleText: {
    fontFamily: fonts.sfProDisplayRegular,
    fontSize: uiConstants.tripListItem.fontSize.name,
    fontWeight: uiConstants.tripListItem.fontWeight.name,
    padding: 20,
  },
})

const TripTitleText: React.FC<Props> = ({ name }) => {
  return <Text style={styles.titleText}> {name}</Text>
}

export default TripTitleText

import React from 'react'
import { StyleSheet, Text } from 'react-native'
import text from '../constants/text'
import fonts from '../constants/fonts'
import uiConstants from '../constants/uiConstants'

const styles = StyleSheet.create({
  dateText: {
    fontFamily: fonts.sfProDisplayRegular,
    fontSize: uiConstants.tripListItem.fontSize.startDate,
    padding: 20,
  },
})

type Props = {
  startDate: string
  endDate: string
}

const TripLengthText: React.FC<Props> = ({ startDate, endDate }) => {
  return <Text style={styles.dateText}> {text.tripListItem.getTripLength(startDate, endDate)}</Text>
}

export default TripLengthText

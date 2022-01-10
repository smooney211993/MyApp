import React, { useMemo, useCallback } from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import uiConstants from '../constants/uiConstants'
import { Trip } from '../types/apiTypes'
import colors from '../constants/colors'
import fonts from '../constants/fonts'
import text from '../constants/text'
import { useNavigation } from '@react-navigation/native'

type Props = {
  trip: Trip
}

const styles = StyleSheet.create({
  itemView: {
    flexDirection: 'column',
    padding: 10,
    backgroundColor: colors.TRIP_CARD_BACKGROUND,
    margin: 20,
  },
  nameText: {
    fontFamily: fonts.sfProDisplayRegular,
    fontSize: uiConstants.tripListItem.font.name,
    padding: 10,
  },
  startDateText: {
    fontFamily: fonts.sfProDisplayRegular,
    fontSize: uiConstants.tripListItem.font.startDate,
    padding: 10,
  },
  endDateText: {
    fontFamily: fonts.sfProDisplayRegular,
    fontSize: uiConstants.tripListItem.font.endDate,
    padding: 10,
  },
  destinationsText: {
    fontFamily: fonts.sfProDisplayRegular,
    fontSize: uiConstants.tripListItem.font.destinations,
    padding: 10,
  },
  statusText: {
    fontFamily: fonts.sfProDisplayRegular,
    fontSize: uiConstants.tripListItem.font.endDate,
    padding: 10,
  },
})

const {
  name: formatName,
  startDate: formatStartDate,
  endDate: formatEndDate,
  destination: formatDestination,
  status: formatStatus,
} = text.tripListItem

const TripListItem: React.FC<Props> = ({ trip, trip: { name, startDate, endDate, destinations, status } }) => {
  const navigate = useNavigation()
  const tripStatus = useMemo(() => formatStatus(status), [status])
  const onTripPress = useCallback(() => {
    navigate.navigate('tripDetails', { trip })
  }, [navigate, trip])

  return (
    <TouchableOpacity style={styles.itemView} onPress={onTripPress}>
      <Text style={styles.nameText}>{formatName(name)}</Text>
      <Text style={styles.startDateText}>{formatStartDate(startDate)}</Text>
      <Text style={styles.endDateText}>{formatEndDate(endDate)}</Text>
      <Text style={styles.destinationsText}>{formatDestination(destinations)}</Text>
      <Text style={styles.statusText}>{tripStatus}</Text>
    </TouchableOpacity>
  )
}

export default TripListItem

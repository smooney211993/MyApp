import React, { useMemo, useLayoutEffect } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import colors from '../constants/colors'
import fonts from '../constants/fonts'
import { useNavigation, useRoute } from '@react-navigation/native'
import { TripDetailsScreenRouteProp } from '../app/navigationTypes'
import uiConstants from '../constants/uiConstants'
import text from '../constants/text'

const styles = StyleSheet.create({
  pageView: {
    flex: 1,
    backGroundColor: colors.SCREEN_BACKGROUND,
    justifyContent: 'center',
    alignItems: 'center',
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

const TripDetailsScreen: React.FC = () => {
  const navigate = useNavigation()
  const route = useRoute<TripDetailsScreenRouteProp>()
  const {
    trip: { name, startDate, endDate, destinations, status },
  } = route.params
  const tripStatus = useMemo(() => formatStatus(status), [status])

  useLayoutEffect(() => {
    navigate.setOptions({ title: name })
  }, [name, navigate])

  return (
    <View style={styles.pageView}>
      <Text style={styles.nameText}>{formatName(name)}</Text>
      <Text style={styles.startDateText}>{formatStartDate(startDate)}</Text>
      <Text style={styles.endDateText}>{formatEndDate(endDate)}</Text>
      <Text style={styles.destinationsText}>{formatDestination(destinations)}</Text>
      <Text style={styles.statusText}>{tripStatus}</Text>
    </View>
  )
}

export default TripDetailsScreen

import React, { useMemo, useCallback, memo } from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import uiConstants from '../constants/uiConstants'
import { Trip } from '../types/apiTypes'
import colors from '../constants/colors'
import fonts from '../constants/fonts'
import text from '../constants/text'
import { useNavigation } from '@react-navigation/native'
import { useAppSelector } from '../hooks/reduxHooks'
import TripLengthText from './TripLengthText'
import TripTitleText from './TripTitleText'

type Props = {
  trip: Trip
}

const styles = StyleSheet.create({
  itemView: {
    flexDirection: 'column',
    backgroundColor: colors.TRIP_CARD_BACKGROUND,
    margin: 20,
    borderRadius: 20,
    minHeight: 150,
  },
  highLightedItemView: {
    flexDirection: 'column',
    borderRadius: 20,
    backgroundColor: colors.TRIP_CARD_BACKGROUND_HIGHLIGHTED,
    margin: 20,
  },
  nameText: {
    fontFamily: fonts.sfProDisplayRegular,
    fontSize: uiConstants.tripListItem.fontSize.name,
    fontWeight: uiConstants.tripListItem.fontWeight.name,
    padding: 20,
  },
  statusText: {
    textAlign: 'right',
    fontFamily: fonts.sfProDisplayRegular,
    fontSize: uiConstants.tripListItem.fontSize.endDate,
    fontWeight: uiConstants.tripListItem.fontWeight.status,
    padding: 20,
  },
})

const { status: formatStatus } = text.tripListItem

const TripListItem: React.FC<Props> = ({ trip, trip: { name, startDate, endDate, status } }) => {
  const isHighlighted = useAppSelector(state => state.ui.appState === 'active' && status === 'NOT_STARTED')
  const navigate = useNavigation()
  const tripStatus = useMemo(() => formatStatus(status), [status])
  const onTripPress = useCallback(() => {
    navigate.navigate('tripDetails', { trip })
  }, [navigate, trip])

  return (
    <TouchableOpacity
      style={[styles.itemView, isHighlighted ? styles.highLightedItemView : null]}
      onPress={onTripPress}
    >
      <TripTitleText name={name} />
      <TripLengthText startDate={startDate} endDate={endDate} />
      <Text style={styles.statusText}>{tripStatus}</Text>
    </TouchableOpacity>
  )
}

export default memo(TripListItem)

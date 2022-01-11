import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import fonts from '../constants/fonts'
import uiConstants from '../constants/uiConstants'

const styles = StyleSheet.create({
  destinationContainer: {
    flexDirection: 'column',
    paddingTop: 20,
    paddingHorizontal: 25,
  },
  destinationsText: {
    fontFamily: fonts.sfProDisplayRegular,
    fontSize: uiConstants.tripListItem.fontSize.name,
    fontWeight: uiConstants.tripListItem.fontWeight.name,
    marginTop: 10,
  },
})

type Props = {
  destinations: string[]
}

const TripDestinationText: React.FC<Props> = ({ destinations }) => {
  return destinations.length > 0 ? (
    <View style={styles.destinationContainer}>
      {destinations.map((it, index) => {
        return (
          <Text style={styles.destinationsText} key={index}>
            {it}
          </Text>
        )
      })}
    </View>
  ) : null
}

export default TripDestinationText

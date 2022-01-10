import React, { useLayoutEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import colors from '../constants/colors'
import { useNavigation, useRoute } from '@react-navigation/native'
import { TripDetailsScreenRouteProp } from '../app/navigationTypes'

import TripTitleText from '../components/TripTitleText'
import TripDestinationText from '../components/TripDestinationText'

const styles = StyleSheet.create({
  pageView: {
    flex: 1,
    backGroundColor: colors.SCREEN_BACKGROUND,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
})

const TripDetailsScreen: React.FC = () => {
  const navigate = useNavigation()
  const route = useRoute<TripDetailsScreenRouteProp>()
  const {
    trip: { name, destinations },
  } = route.params

  useLayoutEffect(() => {
    navigate.setOptions({ title: name })
  }, [name, navigate])

  return (
    <View style={styles.pageView}>
      <TripTitleText name={name} />
      <TripDestinationText destinations={destinations} />
    </View>
  )
}

export default TripDetailsScreen

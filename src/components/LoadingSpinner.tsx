import React from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'
import colors from '../constants/colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
})

type Props = {
  isLoading: boolean
}

const LoadingSpinner: React.FC<Props> = ({ isLoading }) => {
  return isLoading ? (
    <View style={styles.container}>
      <ActivityIndicator color={colors.black} size='large' />
    </View>
  ) : null
}

export default LoadingSpinner

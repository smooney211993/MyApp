import { NavigatorScreenParams, RouteProp } from '@react-navigation/native'
import { Trip } from '../types/apiTypes'

export type NavigatorParamList = {
  tabs: NavigatorScreenParams<TabNavigatorParamList>
}

export type TripsNavigatorParamsList = {
  tripsList: undefined
  tripDetails: { trip: Trip }
}

export type TabNavigatorParamList = {
  home: undefined
  trips: TripsNavigatorParamsList
}

export type SplashNavigatorParamList = {
  splash: undefined
}

// route props

export type TripDetailsScreenRouteProp = RouteProp<TripsNavigatorParamsList, 'tripDetails'>

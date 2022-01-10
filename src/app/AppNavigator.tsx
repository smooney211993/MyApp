import React from 'react'
import { NavigationContainer, NavigatorScreenParams } from '@react-navigation/native'
import { createBottomTabNavigator, BottomTabNavigationOptions } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack'
// @ts-ignore
import HomeIcon from '../assets/icons/tab-home-icon.svg'
// @ts-ignore
import InactiveHomeIcon from '../assets/icons/tab-inactive-home-icon.svg'
// @ts-ignore
import TripsIcon from '../assets/icons/tab-trips-icon.svg'
// @ts-ignore
import InactiveTripsIcon from '../assets/icons/tab-inactive-trips-icon.svg'
import HomeScreen from '../screens/HomeScreen'
import TripScreen from '../screens/TripScreen'
import colors from '../constants/colors'

export type NavigatorParamList = {
  tabs: NavigatorScreenParams<TabNavigatorParamList>
}

export type TabNavigatorParamList = {
  home: undefined
  trips: undefined
}

const Stack = createNativeStackNavigator<NavigatorParamList>()
const Tab = createBottomTabNavigator<TabNavigatorParamList>()

const bottomTabsScreenOptions: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarActiveTintColor: 'black',
  tabBarInactiveTintColor: colors.grey,
}

const BottomTabs = () => {
  return (
    <Tab.Navigator screenOptions={bottomTabsScreenOptions}>
      <Tab.Screen
        name='home'
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (focused ? <HomeIcon /> : <InactiveHomeIcon />),
        }}
      />
      <Tab.Screen
        name='trips'
        component={TripScreen}
        options={{
          tabBarIcon: ({ focused }) => (focused ? <TripsIcon /> : <InactiveTripsIcon />),
        }}
      />
    </Tab.Navigator>
  )
}

const stackNavigatorDefaultOptions: NativeStackNavigationOptions = {
  headerShown: false,
}

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={stackNavigatorDefaultOptions}>
        <Stack.Screen name='tabs' component={BottomTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

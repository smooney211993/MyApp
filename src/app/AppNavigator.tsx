import React from 'react'
import { NavigationContainer, NavigatorScreenParams } from '@react-navigation/native'
import { createBottomTabNavigator, BottomTabNavigationOptions } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen'
import TripScreen from '../screens/TripScreen'

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
  tabBarInactiveTintColor: 'black',
  tabBarLabelStyle: {
    margin: 0,
  },
  tabBarBadgeStyle: {
    marginTop: 3,
  },
}

const BottomTabs = () => {
  return (
    <Tab.Navigator screenOptions={bottomTabsScreenOptions}>
      <Tab.Screen name='home' component={HomeScreen} />
      <Tab.Screen name='trips' component={TripScreen} />
    </Tab.Navigator>
  )
}

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='tabs' component={BottomTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

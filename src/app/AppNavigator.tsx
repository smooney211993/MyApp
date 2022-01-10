import React from 'react'
import { NavigationContainer, NavigatorScreenParams, RouteProp } from '@react-navigation/native'
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
import TripDetailsScreen from '../screens/TripDetailsScreen'
import SplashScreen from '../screens/SplashScreen'
import colors from '../constants/colors'
import { useAppSelector } from '../hooks/reduxHooks'
import fonts from '../constants/fonts'
import {
  SplashNavigatorParamList,
  TripsNavigatorParamsList,
  NavigatorParamList,
  TabNavigatorParamList,
} from './navigationTypes'

const Splash = createNativeStackNavigator<SplashNavigatorParamList>()
const TripStack = createNativeStackNavigator<TripsNavigatorParamsList>()
const Stack = createNativeStackNavigator<NavigatorParamList>()
const Tab = createBottomTabNavigator<TabNavigatorParamList>()

const bottomTabsScreenOptions: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarLabelStyle: {
    fontFamily: fonts.sfProDisplayRegular,
  },
  tabBarActiveTintColor: colors.black,
  tabBarInactiveTintColor: colors.grey,
}

const stackNavigatorDefaultOptions: NativeStackNavigationOptions = {
  headerShown: false,
}

/**
 * Typing useNavigation can be extended by declaration merging
 * Refer https://reactnavigation.org/docs/typescript/#specifying-default-types-for-usenavigation-link-ref-etc
 */
declare global {
  namespace ReactNavigation {
    interface RootParamList extends SplashNavigatorParamList, TripsNavigatorParamsList, TabNavigatorParamList {}
  }
}

const Trips = () => {
  return (
    <TripStack.Navigator screenOptions={stackNavigatorDefaultOptions}>
      <TripStack.Screen name='tripsList' component={TripScreen} />
      <TripStack.Screen name='tripDetails' component={TripDetailsScreen} options={{ headerShown: true }} />
    </TripStack.Navigator>
  )
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
        component={Trips}
        options={{
          tabBarIcon: ({ focused }) => (focused ? <TripsIcon /> : <InactiveTripsIcon />),
        }}
      />
    </Tab.Navigator>
  )
}

export const AppNavigator = () => {
  const { isSplashedViewed } = useAppSelector(state => state.ui)

  return (
    <NavigationContainer>
      {!isSplashedViewed ? (
        <Splash.Navigator screenOptions={stackNavigatorDefaultOptions}>
          <Splash.Screen name='splash' component={SplashScreen} />
        </Splash.Navigator>
      ) : (
        <Stack.Navigator screenOptions={stackNavigatorDefaultOptions}>
          <Stack.Screen name='tabs' component={BottomTabs} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  )
}

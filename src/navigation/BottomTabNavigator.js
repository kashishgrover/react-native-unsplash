/* eslint-disable react/prop-types */
import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import { View, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import PreferencesScreen from '../screens/PreferencesScreen/PreferencesScreen';
import color from '../theme/color';

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-home" size={24} color={tintColor} />
        ),
      },
    },
    ProfileScreen: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-person" size={24} color={tintColor} />
        ),
      },
    },
    PreferencesScreen: {
      screen: PreferencesScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-settings" size={24} color={tintColor} />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: color.red,
      inactiveTintColor: color.greyLight,
      style: {
        backgroundColor: color.greyDarkest,
      },
      showLabel: false,
    },
  },
);

TabNavigator.navigationOptions = () => ({
  headerStyle: {
    backgroundColor: color.greyDarkest,
  },
  headerTitle: (
    <View style={{ width: '100%', paddingLeft: 16 }}>
      <Text style={{ color: color.white, fontSize: 24 }}>
        React Splash
      </Text>
    </View>
  ),
});

export default TabNavigator;

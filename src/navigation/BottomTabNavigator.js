/* eslint-disable react/prop-types */
import React from 'react';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { View, Text } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import PhotosScreen from '../screens/PhotosScreen';
import AlbumsScreen from '../screens/AlbumsScreen';
import AssistantScreen from '../screens/AssistantScreen';
import SharingScreen from '../screens/SharingScreen';
import color from '../theme/color';

const TabNavigator = createMaterialBottomTabNavigator(
  {
    Photos: {
      screen: PhotosScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <MaterialIcons name="photo" size={24} color={tintColor} />
        ),
      },
    },
    Albums: {
      screen: AlbumsScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <MaterialIcons name="photo-library" size={24} color={tintColor} />
        ),
      },
    },
    Assistant: {
      screen: AssistantScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <MaterialIcons name="assistant" size={24} color={tintColor} />
        ),
      },
    },
    Sharing: {
      screen: SharingScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <MaterialIcons name="people" size={24} color={tintColor} />
        ),
      },
    },
  },
  {
    activeColor: color.blue,
    inactiveColor: color.greyLight,
    barStyle: { backgroundColor: color.white },
  },
);

TabNavigator.navigationOptions = () => ({
  headerStyle: {
    backgroundColor: color.white,
  },
  headerTitle: (
    <View style={{ width: '100%', paddingLeft: 8 }}>
      <Text style={{ color: color.blue, fontSize: 22 }}>
        React Splash
      </Text>
    </View>
  ),
});

export default TabNavigator;

import React from 'react';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Text, StyleSheet } from 'react-native';
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
        // eslint-disable-next-line react/prop-types
        tabBarIcon: ({ tintColor }) => (
          <MaterialIcons
            name="photo"
            size={24}
            color={tintColor}
          />
        ),
      },
    },
    Albums: {
      screen: AlbumsScreen,
      navigationOptions: {
        // eslint-disable-next-line react/prop-types
        tabBarIcon: ({ tintColor }) => (
          <MaterialIcons
            name="photo-library"
            size={24}
            color={tintColor}
          />
        ),
      },
    },
    Assistant: {
      screen: AssistantScreen,
      navigationOptions: {
        // eslint-disable-next-line react/prop-types
        tabBarIcon: ({ tintColor }) => (
          <MaterialIcons
            name="assistant"
            size={24}
            color={tintColor}
          />
        ),
      },
    },
    Sharing: {
      screen: SharingScreen,
      navigationOptions: {
        // eslint-disable-next-line react/prop-types
        tabBarIcon: ({ tintColor }) => (
          <MaterialIcons
            name="people"
            size={24}
            color={tintColor}
          />
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
    <Text style={styles.title}>
      React Splash
    </Text>
  ),
});

const styles = StyleSheet.create({
  title: {
    color: color.blue,
    fontSize: 22,
    fontFamily: 'SFProDisplay-Medium',
    width: '100%',
    marginLeft: 16,
  },
});

export default TabNavigator;

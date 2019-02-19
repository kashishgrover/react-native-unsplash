import { createStackNavigator } from 'react-navigation';
import BottomTabNavigator from './BottomTabNavigator';
import SinglePhotoScreen from '../screens/SinglePhotoScreen';

export default createStackNavigator(
  {
    Home: {
      screen: BottomTabNavigator,
    },
    SinglePhotoScreen: {
      screen: SinglePhotoScreen,
    },
  },
);

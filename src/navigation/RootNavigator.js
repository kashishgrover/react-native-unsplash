import { createStackNavigator } from 'react-navigation';
import BottomTabNavigator from './BottomTabNavigator';
import SinglePhotoScreen from '../screens/SinglePhotoScreen/SinglePhotoScreen';

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

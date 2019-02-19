import { createStackNavigator } from 'react-navigation';
import BottomTabNavigator from './BottomTabNavigator';
import SinglePhotoScreen from '../screens/SinglePhotoScreen/SinglePhotoScreen';

export default createStackNavigator(
  {
    BottomTabNavigator: {
      screen: BottomTabNavigator,
    },
    SinglePhotoScreen: {
      screen: SinglePhotoScreen,
    },
  },
  {
    headerMode: 'none',
  },
);

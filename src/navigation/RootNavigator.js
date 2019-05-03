import { createStackNavigator } from 'react-navigation';
import BottomTabNavigator from './BottomTabNavigator';
import SinglePhotoScreen from '../screens/SinglePhotoScreen';
import TransitionConfiguration from './TransitionConfiguration';

export default createStackNavigator(
  {
    Home: {
      screen: BottomTabNavigator,
    },
    SinglePhotoScreen: {
      screen: SinglePhotoScreen,
    },
  },
  {
    transitionConfig: TransitionConfiguration,
  },
);

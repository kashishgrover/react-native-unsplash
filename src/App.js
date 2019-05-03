import { createAppContainer } from 'react-navigation';
import { StatusBar, TouchableOpacity } from 'react-native';
import RootNavigator from './navigation/RootNavigator';

StatusBar.setBackgroundColor('white');
StatusBar.setBarStyle('dark-content');

TouchableOpacity.defaultProps = {
  ...TouchableOpacity.defaultProps,
  activeOpacity: 0.8,
};

export default createAppContainer(RootNavigator);

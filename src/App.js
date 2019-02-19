import { createAppContainer } from 'react-navigation';
import { StatusBar, TouchableOpacity } from 'react-native';
import RootNavigator from './navigation/RootNavigator';

StatusBar.setBarStyle('light-content');

TouchableOpacity.defaultProps = {
  activeOpacity: 0.8,
  ...TouchableOpacity.defaultProps,
};

export default createAppContainer(RootNavigator);

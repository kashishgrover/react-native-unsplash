import { createAppContainer } from 'react-navigation';
import { StatusBar, TouchableOpacity } from 'react-native';
import RootNavigator from './navigation/RootNavigator';

StatusBar.setBackgroundColor('white');
StatusBar.setBarStyle('dark-content');

TouchableOpacity.defaultProps = {
  ...TouchableOpacity.defaultProps,
  activeOpacity: 0.8,
};

// eslint-disable-next-line no-console
console.disableYellowBox = true;

export default createAppContainer(RootNavigator);

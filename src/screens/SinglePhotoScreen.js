import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import color from '../theme/color';

class SinglePhotoScreen extends React.Component {
  static navigationOptions = () => ({
    headerTintColor: color.blue,
    headerStyle: {
      backgroundColor: color.white,
    },
  })

  state = {};

  render() {
    return (
      <View style={styles.container}>
        <Text>Single Photo Screen</Text>
      </View>
    );
  }
}

export default SinglePhotoScreen;

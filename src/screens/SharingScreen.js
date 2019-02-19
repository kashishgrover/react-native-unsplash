import React from 'react';
import { View } from 'react-native';
import FastImage from 'react-native-fast-image';
import styles from './styles';

class SharingScreen extends React.Component {
  state = {};

  render() {
    return (
      <View style={styles.container}>
        <FastImage
          source={{ uri: 'https://media.giphy.com/media/GcSqyYa2aF8dy/giphy.gif' }}
          style={{ height: '100%', width: '100%' }}
          resizeMode="contain"
        />
      </View>
    );
  }
}

export default SharingScreen;

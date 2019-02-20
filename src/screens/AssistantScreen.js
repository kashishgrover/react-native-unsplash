import React from 'react';
import { View } from 'react-native';
import FastImage from 'react-native-fast-image';
import styles from './styles';

const GIF_URL = 'https://media.giphy.com/media/op8213GjaQb0Q/giphy.gif';

class AssistantScreen extends React.Component {
  state = {};

  render() {
    return (
      <View style={styles.container}>
        <FastImage
          source={{ uri: GIF_URL }}
          style={{ height: '100%', width: '100%' }}
          resizeMode="contain"
        />
      </View>
    );
  }
}

export default AssistantScreen;

import React from 'react';
import FastImage from 'react-native-fast-image';
import { View } from 'react-native';
import styles from './styles';

const ALBUM_GIF = 'https://media.giphy.com/media/ezxnhkB950ygE/giphy.gif';

class AlbumsScreen extends React.Component {
  state = {};

  render() {
    return (
      <View style={styles.container}>
        <FastImage
          source={{ uri: ALBUM_GIF }}
          style={{ height: '100%', width: '100%' }}
          resizeMode="contain"
        />
      </View>
    );
  }
}

export default AlbumsScreen;

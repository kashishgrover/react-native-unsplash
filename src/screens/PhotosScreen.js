import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import ImageGallery from '../components/ImageGallery';

class PhotosScreen extends React.Component {
  state = {};

  render() {
    return (
      <View style={styles.container}>
        <ImageGallery getRef={(ref) => { this.imageGalleryRef = ref; }} />
      </View>
    );
  }
}

export default PhotosScreen;

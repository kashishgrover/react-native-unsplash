import React from 'react';
import { View } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import styles from './styles';
import ImageGallery from '../components/ImageGallery';

class PhotosScreen extends React.Component {
  state = {};

  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageGallery />
      </View>
    );
  }
}

export default PhotosScreen;

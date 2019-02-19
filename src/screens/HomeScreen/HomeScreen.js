import React from 'react';
import { View } from 'react-native';
import styles from '../styles';
import ImageGallery from '../../components/ImageGallery/ImageGallery';

class HomeScreen extends React.Component {
  state = {};

  render() {
    return (
      <View style={styles.container}>
        <ImageGallery />
      </View>
    );
  }
}

export default HomeScreen;

import React from 'react';
import { View } from 'react-native';
import styles from '../styles';
import config from '../../config';
import ImageGallery from '../../components/ImageGallery';

class HomeScreen extends React.Component {
  state = {};

  render() {
    return (
      <View style={styles.container}>
        <ImageGallery baseUrl={config.baseUrl} />
      </View>
    );
  }
}

export default HomeScreen;

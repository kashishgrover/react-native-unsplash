import React from 'react';
import { SafeAreaView } from 'react-native';
import styles from './styles';
import ImageGallery from '../../components/ImageGallery';

class HomeScreen extends React.Component {
  state = {};

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ImageGallery />
      </SafeAreaView>
    );
  }
}

export default HomeScreen;

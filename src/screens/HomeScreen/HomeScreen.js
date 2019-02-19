import React from 'react';
import { View } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import styles from '../styles';
import ImageGallery from '../../components/ImageGallery/ImageGallery';

const resetAction = StackActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: 'Home' })],
});

class HomeScreen extends React.Component {
  static navigationOptions = {
    tabBarOnPress: ({ navigation }) => navigation.dispatch(resetAction),
  };

  state = {};

  render() {
    return (
      <View style={styles.container}>
        <ImageGallery getRef={(ref) => { this.imageGalleryRef = ref; }} />
      </View>
    );
  }
}

export default HomeScreen;

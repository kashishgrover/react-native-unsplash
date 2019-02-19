import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, TouchableOpacity, Dimensions } from 'react-native';
import { withNavigation } from 'react-navigation';

const SQUARE_WIDTH = Dimensions.get('window').width / 4;
const DATA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

class ImageGallery extends React.Component {
  state = {};

  renderItem = () => {
    const { navigation } = this.props;

    return (
      <TouchableOpacity
        style={{
          width: SQUARE_WIDTH,
          height: SQUARE_WIDTH,
          backgroundColor: 'white',
          borderWidth: 1,
        }}
        onPress={() => navigation.navigate('SinglePhotoScreen')}
      />
    );
  }

  render() {
    return (
      <FlatList
        data={DATA}
        renderItem={this.renderItem}
        keyExtractor={(item) => item}
        numColumns={4}
      />
    );
  }
}

ImageGallery.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default withNavigation(ImageGallery);

import React from 'react';
import { FlatList, View, Dimensions } from 'react-native';

const SQUARE_WIDTH = Dimensions.get('window').width / 4 - 1;

const DATA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

class ImageGallery extends React.Component {
  state = {};

  renderItem = () => (
    <View
      style={{
        width: SQUARE_WIDTH,
        height: SQUARE_WIDTH,
        backgroundColor: 'white',
        borderWidth: 1,
      }}
    />
  )

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

export default ImageGallery;

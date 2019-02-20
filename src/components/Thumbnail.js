import React from 'react';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
import { TouchableHighlight } from 'react-native';
import color from '../theme/color';
import ImageLoad from './ImageLoad';

class Thumbnail extends React.PureComponent {
  render() {
    const { navigation, photo, width } = this.props;

    return (
      <TouchableHighlight
        style={{ width, height: width }}
        onPress={() => navigation.navigate('SinglePhotoScreen', { photo })}
        underlayColor={color.blueDark}
      >
        <ImageLoad
          style={{ width: '100%', height: '100%' }}
          source={{ uri: photo.urls.thumb }}
          placeholderColor={photo.color}
        />
      </TouchableHighlight>
    );
  }
}

Thumbnail.propTypes = {
  navigation: PropTypes.object.isRequired,
  photo: PropTypes.object.isRequired,
  width: PropTypes.number.isRequired,
};

export default withNavigation(Thumbnail);

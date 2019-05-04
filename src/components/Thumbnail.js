import React from 'react';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
import { TouchableHighlight } from 'react-native';
import color from '../theme/color';
import ImageLoad from './ImageLoad';

class Thumbnail extends React.PureComponent {
  handleNavigate = () => {
    const { navigation, photo } = this.props;
    navigation.navigate('SinglePhotoScreen', {
      photo,
      transition: 'scaleOut',
    });
  }

  render() {
    const { photo, width } = this.props;

    return (
      <TouchableHighlight
        style={{ width, height: width }}
        onPress={this.handleNavigate}
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

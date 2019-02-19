import React from 'react';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
import { TouchableHighlight } from 'react-native';
import FastImage from 'react-native-fast-image';
import color from '../../theme/color';
import ThumbnailConfig from './Thumbnail.config';

class Thumbnail extends React.PureComponent {
  render() {
    const { navigation, url } = this.props;

    return (
      <TouchableHighlight
        style={{ width: ThumbnailConfig.width, height: ThumbnailConfig.width }}
        onPress={() => navigation.navigate('SinglePhotoScreen')}
        underlayColor={color.redDark}
      >
        <FastImage
          style={{ width: '100%', height: '100%' }}
          source={{ uri: url }}
        />
      </TouchableHighlight>
    );
  }
}

Thumbnail.propTypes = {
  navigation: PropTypes.object.isRequired,
  url: PropTypes.string.isRequired,
};

export default withNavigation(Thumbnail);

import React from 'react';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
import { TouchableHighlight } from 'react-native';
import FastImage from 'react-native-fast-image';
import color from '../../theme/color';

class Thumbnail extends React.PureComponent {
  render() {
    const { navigation, url, width } = this.props;

    return (
      <TouchableHighlight
        style={{ width, height: width }}
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
  width: PropTypes.number.isRequired,
};

export default withNavigation(Thumbnail);

import React from 'react';
import PropTypes from 'prop-types';
import FastImage from 'react-native-fast-image';
import { Animated, View } from 'react-native';

const AnimatedFastImage = Animated.createAnimatedComponent(FastImage);

class ImageLoad extends React.Component {
  state = {
    placeholderOpacity: new Animated.Value(1),
  };

  onLoadEnd = () => {
    const { placeholderOpacity } = this.state;
    Animated.timing(placeholderOpacity, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }

  render() {
    const { placeholderColor } = this.props;
    const { placeholderOpacity } = this.state;

    return (
      <View>
        <AnimatedFastImage
          onLoadStart={this.onLoadStart}
          onLoadEnd={this.onLoadEnd}
          {...this.props}
        />
        <Animated.View
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            opacity: placeholderOpacity,
            backgroundColor: placeholderColor,
          }}
        />
      </View>
    );
  }
}

ImageLoad.propTypes = {
  placeholderColor: PropTypes.string.isRequired,
};

export default ImageLoad;

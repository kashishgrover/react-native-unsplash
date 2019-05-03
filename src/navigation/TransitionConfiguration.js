import { Animated, Easing } from 'react-native';

const SlideFromRightAnimation = (index, position, width) => {
  const translateX = position.interpolate({
    inputRange: [index - 1, index],
    outputRange: [width, 0],
  });
  const slideFromRight = { transform: [{ translateX }] };
  return slideFromRight;
};

const SlideFromLeftAnimation = (index, position, width) => {
  const translateX = position.interpolate({
    inputRange: [index - 1, index],
    outputRange: [-width, 0],
  });
  const slideFromLeft = { transform: [{ translateX }] };
  return slideFromLeft;
};

const SlideFromBottomAnimation = (index, position, height) => {
  const translateY = position.interpolate({
    inputRange: [index - 1, index],
    outputRange: [height, 0],
  });
  const slideFromRight = { transform: [{ translateY }] };
  return slideFromRight;
};

const SlideFromTopAnimation = (index, position, height) => {
  const translateY = position.interpolate({
    inputRange: [index - 1, index],
    outputRange: [-height, 0],
  });
  const slideFromRight = { transform: [{ translateY }] };
  return slideFromRight;
};

const OpacityAnimation = (index, position) => {
  const opacity = position.interpolate({
    inputRange: [index - 1, index],
    outputRange: [0, 1],
  });
  return { opacity };
};

export default () => ({
  transitionSpec: {
    duration: 1000,
    easing: Easing.out(Easing.poly(6)),
    timing: Animated.timing,
    useNativeDriver: true,
  },
  screenInterpolator: (props) => {
    const { layout, position, scene } = props;
    const transition = scene.route.params ? scene.route.params.transition : null;
    return {
      opacity: OpacityAnimation(scene.index, position),
      slideFromRight: SlideFromRightAnimation(scene.index, position, layout.initWidth),
      slideFromLeft: SlideFromLeftAnimation(scene.index, position, layout.initWidth),
      slideFromBottom: SlideFromBottomAnimation(scene.index, position, layout.initHeight),
      slideFromTop: SlideFromTopAnimation(scene.index, position, layout.initHeight),
    }[transition || 'opacity'];
  },
});

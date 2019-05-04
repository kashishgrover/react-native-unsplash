import { Animated, Easing } from 'react-native';

/*
  Slide From Right Animation:

  index -> Tells the index of the current page
  position -> Animated value to interpolate over
  width -> Width of the screen

  Interpolate Screen B while going from (index - 1) to (index).
  Take screen B from the width of the screen to 0
  Translating over X axis -> starting from right of the screen and stopping at left
*/
const SlideFromRightAnimation = (index, position, width) => {
  const translateX = position.interpolate({
    inputRange: [index - 1, index],
    outputRange: [width, 0],
  });
  const slideFromRight = { transform: [{ translateX }] };
  return slideFromRight;
};

/*
  Slide From Left Animation:

  index -> Tells the index of the current page
  position -> Animated value to interpolate over
  width -> Width of the screen

  Interpolate Screen B while going from (index - 1) to (index).
  Take screen B from the negative width of the screen to 0
  Translating over X axis -> starting from left of the screen and stopping at right
*/

const SlideFromLeftAnimation = (index, position, width) => {
  const translateX = position.interpolate({
    inputRange: [index - 1, index],
    outputRange: [-width, 0],
  });
  const slideFromLeft = { transform: [{ translateX }] };
  return slideFromLeft;
};

/*
  Slide From Bottom Animation:

  index -> Tells the index of the current page
  position -> Animated value to interpolate over
  height -> Height of the screen

  Interpolate Screen B while going from (index - 1) to (index).
  Take screen B from the height of the screen to 0
  Translating over Y axis -> starting from bottom of the screen and stopping at top
*/
const SlideFromBottomAnimation = (index, position, height) => {
  const translateY = position.interpolate({
    inputRange: [index - 1, index],
    outputRange: [height, 0],
  });
  const slideFromRight = { transform: [{ translateY }] };
  return slideFromRight;
};

/*
  Slide From Bottom Animation:

  index -> Tells the index of the current page
  position -> Animated value to interpolate over
  height -> Height of the screen

  Interpolate Screen B while going from (index - 1) to (index).
  Take screen B from the -height of the screen to 0
  Translating over Y axis -> starting from top of the screen and stopping at bottom
*/
const SlideFromTopAnimation = (index, position, height) => {
  const translateY = position.interpolate({
    inputRange: [index - 1, index],
    outputRange: [-height, 0],
  });
  const slideFromRight = { transform: [{ translateY }] };
  return slideFromRight;
};

/*
  Opacity Animation:

  index -> Tells the index of the current page
  position -> Animated value to interpolate over

  Interpolate Screen B while going from (index - 1) to (index).
  Take screen B from the 0 of the screen to 1
  Changing opacity -> Screen B starting from transparent to opaque
*/
const OpacityAnimation = (index, position) => {
  const opacity = position.interpolate({
    inputRange: [index - 1, index],
    outputRange: [0, 1],
  });
  return { opacity };
};

/*
  Scale Out Animation:

  index -> Tells the index of the current page
  position -> Animated value to interpolate over

  Interpolate Screen B while going from (index - 1) to (index).
  Take screen B from the scale 0 of to scale 1
  Changing scale -> Screen B scaling out from center of the screen
*/
const ScaleOutAnimation = (index, position) => {
  const scaleX = position.interpolate({
    inputRange: [index - 1, index],
    outputRange: [0, 1],
  });
  const scaleY = position.interpolate({
    inputRange: [index - 1, index],
    outputRange: [0, 1],
  });
  return { transform: [{ scaleX }, { scaleY }] };
};

export default () => ({
  transitionSpec: {
    duration: 500,
    easing: Easing.out(Easing.poly(6)),
    timing: Animated.timing,
    useNativeDriver: true,
  },
  screenInterpolator: (props) => {
    /*
      layout -> Gives the layout of the screen. Get height and width from here.
      position -> Gives an Animated value you would interpolate over
      scene -> Gives information about the screen you're on, and the screen you're going to
    */
    const { layout, position, scene } = props;

    /*
      Pass the transition prop when navigating from Screen A to Screen B
      For example: this.props.navigation.navigate('ScreenB', { transition: 'slideFromBottom' })
    */
    const transition = scene.route.params ? scene.route.params.transition : null;

    return {
      opacity: OpacityAnimation(scene.index, position),
      scaleOut: ScaleOutAnimation(scene.index, position),
      slideFromRight: SlideFromRightAnimation(scene.index, position, layout.initWidth),
      slideFromLeft: SlideFromLeftAnimation(scene.index, position, layout.initWidth),
      slideFromBottom: SlideFromBottomAnimation(scene.index, position, layout.initHeight),
      slideFromTop: SlideFromTopAnimation(scene.index, position, layout.initHeight),
    }[transition || 'opacity'];
  },
});

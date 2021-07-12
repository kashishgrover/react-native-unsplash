import React from "react";
import PropTypes from "prop-types";
import { ScrollView } from "react-native";
import color from "../theme/color";
import ImageLoad from "../components/ImageLoad";

class SinglePhotoScreen extends React.Component {
  static navigationOptions = () => ({
    headerTintColor: color.blue,
    headerStyle: {
      backgroundColor: color.white,
    },
  });

  render() {
    const {
      route: {
        params: { photo },
      },
    } = this.props;

    return (
      <ScrollView
        maximumZoomScale={5}
        minimumZoomScale={1}
        style={{ backgroundColor: photo.color }}
        contentContainerStyle={{ flex: 1 }}
      >
        <ImageLoad
          style={{ width: "100%", height: "100%" }}
          source={{ uri: photo.urls.full }}
          resizeMode="contain"
          placeholderColor={photo.color}
        />
      </ScrollView>
    );
  }
}

SinglePhotoScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default SinglePhotoScreen;

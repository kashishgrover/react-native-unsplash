import React from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableHighlight } from "react-native";
import color from "../theme/color";
import ImageLoad from "./ImageLoad";

export default Thumbnail = ({ photo, width }) => {
  const { navigate } = useNavigation();

  handleNavigate = () => {
    navigate("SinglePhotoScreen", {
      photo,
      transition: "scaleOut",
    });
  };

  return (
    <TouchableHighlight
      style={{ width, height: width }}
      onPress={this.handleNavigate}
      underlayColor={color.blueDark}
      onPress={() => navigate("SinglePhotoScreen", { photo })}
    >
      <ImageLoad
        style={{ width: "100%", height: "100%" }}
        source={{ uri: photo.urls.thumb }}
        placeholderColor={photo.color}
      />
    </TouchableHighlight>
  );
};

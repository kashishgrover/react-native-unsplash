import "react-native-gesture-handler";
import { Platform, StatusBar, TouchableOpacity } from "react-native";
import RootNavigator from "./navigation/RootNavigator";

if (Platform.OS === "android") {
  StatusBar.setBackgroundColor("white");
}

StatusBar.setBarStyle("dark-content");

TouchableOpacity.defaultProps = {
  ...TouchableOpacity.defaultProps,
  activeOpacity: 0.8,
};

export default RootNavigator;

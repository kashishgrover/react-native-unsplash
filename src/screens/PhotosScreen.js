import React from "react";
import { View } from "react-native";
import styles from "./styles";
import ImageGallery from '../components/ImageGallery';

export default function PhotosScreen() {
  return (
    <View style={styles.container}>
      <ImageGallery />
    </View>
  );
}

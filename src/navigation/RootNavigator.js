// import TransitionConfiguration from './TransitionConfiguration';
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabNavigator from "./BottomTabNavigator";
import SinglePhotoScreen from "../screens/SinglePhotoScreen";

const Stack = createStackNavigator();

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={BottomTabNavigator} />
        <Stack.Screen name="SinglePhotoScreen" component={SinglePhotoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

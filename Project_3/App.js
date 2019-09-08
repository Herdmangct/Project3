// Libraries
import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";

// My Components
import MainNavigator from "./navigation/MainNavigator";

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf")
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false); // initially set font loaded to false

  // 1) Only try using the fonts once they are loaded
  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts} // fetchFonts returns true once loaded // put in promise
        onFinish={() => setFontLoaded(true)} // keep splash screen open until fonts are loaded
      />
    );
  }

  // 2) Load the page once fonts are loaded
  return <MainNavigator />;
}

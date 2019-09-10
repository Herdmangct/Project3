import React from "react";
import {
  View,
  StyleSheet,
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../../constants/Colors";

const BeerButton = props => {
  let TouchableComponent = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableComponent = TouchableNativeFeedback;
  }
  return (
    <TouchableComponent useForeground delayPressIn={30} onPress={props.onClick}>
      <View style={styles.button}>
        <Ionicons name="ios-beer" size={75} color={Colors.primaryColor} />
      </View>
    </TouchableComponent>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    position: "absolute",
    top: -50,
    right: 5,
    width: 80,
    height: 80,
    borderRadius: 100,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden"
  }
});

export default BeerButton;

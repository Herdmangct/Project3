import React from "react";
import { Text, StyleSheet } from "react-native";

// constants
import Colors from "../../constants/Colors";

const BodyText = props => (
  <Text style={{ ...styles.bodyText, ...props.style }} numberOfLines={1}>
    {props.children}
  </Text>
);

const styles = StyleSheet.create({
  bodyText: {
    fontFamily: "open-sans",
    color: Colors.primaryColor
  }
});

export default BodyText;

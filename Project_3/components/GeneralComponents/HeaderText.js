import React from "react";
import { Text, StyleSheet } from "react-native";

// constants
import Colors from "../../constants/Colors";

const HeaderText = props => (
  <Text style={{ ...styles.headerText, ...props.style }} numberOfLines={1}>
    {props.children}
  </Text>
);

const styles = StyleSheet.create({
  headerText: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
    color: Colors.primaryTextColor
  }
});

export default HeaderText;

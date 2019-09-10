import React from "react";
import { Text, StyleSheet } from "react-native";

// constants
import Colors from "../../constants/Colors";
import Fonts from "../../constants/Fonts";

const HeaderText = props => (
  <Text style={{ ...styles.headerText, ...props.style }} numberOfLines={1}>
    {props.children}
  </Text>
);

const styles = StyleSheet.create({
  headerText: {
    fontFamily: Fonts.headerTextFont,
    fontSize: 18,
    color: Colors.primaryTextColor
  }
});

export default HeaderText;

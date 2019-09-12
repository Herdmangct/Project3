import React from "react";
import { View, StyleSheet } from "react-native";

// My Components
import BodyText from "../GeneralComponents/BodyText";

// Constants
import Colors from "../../constants/Colors";

// Purely responsible for layout
const OptionsHeader = props => {
  return (
    <View style={styles.headerWrapper}>
      <BodyText style={styles.headerText}>{props.title}</BodyText>
    </View>
  );
};

const styles = StyleSheet.create({
  headerWrapper: {
    backgroundColor: Colors.primaryColor,
    height: 50,
    justifyContent: "center"
  },
  headerText: {
    color: Colors.accentColor,
    fontSize: 14
  }
});

export default OptionsHeader;

import React from "react";
import { Image, StyleSheet } from "react-native";
import { List } from "react-native-paper";

// My Components

// Constants
import Colors from "../../constants/Colors";
import Fonts from "../../constants/Fonts";

// Purely responsible for layout
const DropDownMenu = props => {
  return (
    <List.Accordion
      title={props.title}
      style={styles.listAccordian}
      titleStyle={styles.listAccordianTitleStyle}
      left={props => (
        <Image source={{ uri: props.imageUrl }} style={styles.image} />
      )}
    >
      {props.children}
    </List.Accordion>
  );
};

const styles = StyleSheet.create({
  listAccordian: {
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.primaryColor
  },
  listAccordianTitleStyle: {
    fontFamily: Fonts.headerTextFont,
    fontSize: 18,
    color: Colors.primaryTextColor
  },
  image: { width: 25, height: 25 }
});

export default DropDownMenu;

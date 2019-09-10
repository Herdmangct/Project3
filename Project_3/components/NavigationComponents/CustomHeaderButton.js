import React from "react";
import { Platform } from "react-native";
import { HeaderButton } from "react-navigation-header-buttons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// Constants
import Colors from "../../constants/Colors";

const CustomHeaderButton = props => {
  return (
    <HeaderButton
      {...props}
      IconComponent={MaterialCommunityIcons}
      iconSize={23}
      color={
        Platform.OS === "android" ? Colors.accentColor : Colors.primaryColor
      }
    />
  );
};

export default CustomHeaderButton;

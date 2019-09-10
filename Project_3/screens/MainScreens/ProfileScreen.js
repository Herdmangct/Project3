import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

// My Components
import moduleName from "../../components/GeneralComponents/BodyText";
import BodyText from "../../components/GeneralComponents/BodyText";

const ProfileScreen = props => {
  return (
    <View style={styles.screen}>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate({
            routeName: "Favourites"
          });
        }}
      >
        <BodyText>Go To The Favourites Screen</BodyText>
      </TouchableOpacity>
      <BodyText>The Profile Screen</BodyText>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default ProfileScreen;

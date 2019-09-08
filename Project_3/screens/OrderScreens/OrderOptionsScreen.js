import React from "react";
import { View, Text, StyleSheet } from "react-native";

const OrderOptionsScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>The Order Options Screen</Text>
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

export default OrderOptionsScreen;

import React from "react";
import { View, Text, StyleSheet } from "react-native";

const OrderProcessingScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>The Order Processing Screen</Text>
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

export default OrderProcessingScreen;

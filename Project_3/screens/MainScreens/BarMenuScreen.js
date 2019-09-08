import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

// data
import { BARS } from "../../data/dummy-data";

const BarMenuScreen = props => {
  const barID = props.navigation.getParam("barID");

  const selectedBar = BARS.find(bar => bar.id === barID);
  return (
    <View style={styles.screen}>
      <Text>{selectedBar.title}</Text>
      <Text>The Bar Menu Screen</Text>
      <Button
        title="Go to The Order Options Screen"
        onPress={() => {
          props.navigation.navigate({ routeName: "OrderOptions" });
        }}
      />
    </View>
  );
};

BarMenuScreen.navigationOptions = navigationData => {
  const barID = navigationData.navigation.getParam("barID");

  const selectedBar = BARS.find(bar => bar.id === barID);

  return {
    headerTitle: selectedBar.title
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default BarMenuScreen;

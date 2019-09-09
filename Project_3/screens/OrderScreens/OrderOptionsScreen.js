import React from "react";
import { View, StyleSheet } from "react-native";

// Data
import { BARITEMS } from "../../data/dummy-data";

// My Components
import BodyText from "../../components/GeneralComponents/BodyText";

const OrderOptionsScreen = props => {
  const barItemId = props.navigation.getParam("barItemId");
  const selectedBarItem = BARITEMS.find(barItem => barItem.id === barItemId);

  return (
    <View style={styles.screen}>
      <BodyText>{selectedBarItem.title}</BodyText>
      <BodyText>The Order Options Screen</BodyText>
    </View>
  );
};

OrderOptionsScreen.navigationOptions = navigationData => {
  const selectedBarTitle = navigationData.navigation.getParam(
    "selectedBarTitle"
  );
  return {
    headerTitle: selectedBarTitle
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default OrderOptionsScreen;

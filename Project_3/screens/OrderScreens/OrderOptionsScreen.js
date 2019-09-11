import React from "react";
import { Text, View, StyleSheet, SectionList } from "react-native";

// Data
import { BARITEMS } from "../../data/dummy-data";

// My Components
import BodyText from "../../components/GeneralComponents/BodyText";

const OrderOptionsScreen = props => {
  const barItemId = props.navigation.getParam("barItemId");
  const selectedBarItem = BARITEMS.find(barItem => barItem.id === barItemId);

  return (
    <View style={styles.screen}>
      <SectionList
        renderItem={({ item, index, section }) => (
          <Text key={index}>{item}</Text>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={{ fontWeight: "bold" }}>{title}</Text>
        )}
        sections={[
          { title: "Title1", data: ["item1", "item2"] },
          { title: "Title2", data: ["item3", "item4"] },
          { title: "Title3", data: ["item5", "item6"] }
        ]}
        keyExtractor={(item, index) => item + index}
      />
    </View>
  );
};

// <View style={styles.screen}>
//     <BodyText>{selectedBarItem.title}</BodyText>
//     <BodyText>The Order Options Screen</BodyText>
//   </View>

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

import React, { useState } from "react";
import { View, StyleSheet, SectionList } from "react-native";
import { List, Checkbox, RadioButton } from "react-native-paper";

// Data
import { BARITEMS } from "../../data/dummy-data";

// My Components
import HeaderText from "../../components/GeneralComponents/HeaderText";
import BodyText from "../../components/GeneralComponents/BodyText";

// constants
import Colors from "../../constants/Colors";

const OrderOptionsScreen = props => {
  const barItemId = props.navigation.getParam("barItemId");
  const selectedBarItem = BARITEMS.find(barItem => barItem.id === barItemId); // for bar item card in future

  // get sections data

  // checkbox
  const [checkedStatus, setCheckedStatus] = useState("unchecked");

  const renderItem = ({ item, index, section }) => {
    return (
      <List.Item
        title={<HeaderText>{item}</HeaderText>}
        left={() => (
          <Checkbox.Android
            status={checkedStatus}
            onPress={() => {
              setCheckedStatus(
                checkedStatus === "unchecked" ? "checked" : "unchecked"
              );
            }}
          />
        )}
        style={{
          borderBottomWidth: 0.5,
          borderBottomColor: Colors.primaryColor
        }}
      />
    );
  };

  const renderSectionHeader = ({ section: { title } }) => {
    return (
      <View style={{ backgroundColor: Colors.smallTextColor }}>
        <HeaderText
          style={{
            color: Colors.accentColor
          }}
        >
          {title}
        </HeaderText>
      </View>
    );
  };

  return (
    <View>
      <SectionList
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        sections={[
          { title: "CHOOSE SIZE", data: ["Single", "Double"] },
          { title: "CHOOSE MIXER", data: ["Coke", "Lemonade", "On the rocks"] },
          { title: "SPECIAL REQUESTS", data: ["item5", "item6"] }
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
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default OrderOptionsScreen;

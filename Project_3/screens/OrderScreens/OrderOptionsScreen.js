import React from "react";
import { View, StyleSheet, FlatList } from "react-native";

// Data
import { BARITEMS } from "../../data/dummy-data";

// My Components
import OptionsList from "../../components/Orders/OptionsList";
import OrderButton from "../../components/Orders/OrderButton";

// My Models
import ListData from "../../models/BusinessLogicModels/listData";

const OrderOptionsScreen = props => {
  const barItemId = props.navigation.getParam("barItemId");
  const selectedBarItem = BARITEMS.find(barItem => barItem.id === barItemId); // for bar item card in future

  // get listData - This function allows me to have as many order options as I would like on each object
  const listData = Object.keys(selectedBarItem.orderOptions).map(label => {
    return new ListData(
      selectedBarItem.orderOptions[label].optionTitle,
      selectedBarItem.orderOptions[label].optionData
    );
  });

  const renderOptions = itemData => {
    return (
      <OptionsList
        title={itemData.item.title}
        listData={itemData.item.listData}
      />
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={listData}
        keyExtractor={(item, index) => item.title}
        renderItem={renderOptions}
        style={props.style}
      />
      <OrderButton
        navigation={props.navigation}
        itemTitle={selectedBarItem.title}
        barItem={selectedBarItem}
      />
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
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default OrderOptionsScreen;

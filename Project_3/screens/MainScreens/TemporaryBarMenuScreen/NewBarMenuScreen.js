// Libraries
import React from "react";
import { StyleSheet, FlatList, Image } from "react-native";
import { List } from "react-native-paper";

// data
import { BARS, BARITEMS } from "../../data/dummy-data";

// My Components
import BarItemCard from "../../components/MainScreens/BarItemCard";
import DropDownMenu from "../../components/MainScreens/DropDownMenu";

// Constants
import Colors from "../../constants/Colors";
import Fonts from "../../constants/Fonts";

const BarMenuScreen = props => {
  const renderBarItem = itemData => {
    // console.log("itemData", itemData);
    return (
      <DropDownMenu
        title={itemData.item.subCategory}
        imageUrl={itemData.item.imageUrl}
      >
        <List.Item title="First item" />
        <List.Item title="Second item" />
      </DropDownMenu>
    );
  };

  // get bar information and drinks information
  const barID = props.navigation.getParam("barID");

  const selectedBar = BARS.find(bar => bar.id === barID);
  const displayedDrinks = BARITEMS.filter(
    barItem => barItem.barId.indexOf(barID) >= 0
  );

  // subCategories
  const subCategories = [
    ...new Set(displayedDrinks.map(drink => drink.subCategory))
  ].map(subCategory => {
    return {
      id: displayedDrinks.find(barItem => barItem.subCategory === subCategory)
        .id,
      subCategory: subCategory
    };
  });

  console.log(subCategories);

  return (
    <FlatList
      data={displayedDrinks}
      keyExtractor={(item, index) => item.id}
      renderItem={renderBarItem}
      style={styles.flatList}
    />
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
  },
  flatList: {
    width: "100%",
    height: "100%"
  }
});

export default BarMenuScreen;

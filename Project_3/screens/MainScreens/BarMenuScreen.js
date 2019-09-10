// Libraries
import React from "react";
import { StyleSheet, FlatList } from "react-native";

// data
import { BARS, BARITEMS } from "../../data/dummy-data";

// My Components
import BarItemCard from "../../components/MainScreens/BarItemCard";

const BarMenuScreen = props => {
  const renderBarItem = itemData => {
    return (
      <BarItemCard
        imageUrl={itemData.item.imageUrl}
        title={itemData.item.title}
        servingSize={itemData.item.servingSize}
        servingUnit={itemData.item.servingUnit}
        price={itemData.item.price}
        onSelectBarItem={() => {
          props.navigation.navigate({
            routeName: "OrderOptions",
            params: {
              barItemId: itemData.item.id,
              selectedBarTitle: selectedBar.title
            }
          });
        }}
      />
    );
  };

  // get bar information and drinks information
  const barID = props.navigation.getParam("barID");

  const selectedBar = BARS.find(bar => bar.id === barID);
  const displayedDrinks = BARITEMS.filter(
    barItem => barItem.barId.indexOf(barID) >= 0
  );

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

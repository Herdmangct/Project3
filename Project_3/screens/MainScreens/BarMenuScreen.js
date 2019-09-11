// Libraries
import React from "react";
import { StyleSheet, FlatList } from "react-native";

// data
import { BARS, BARITEMS } from "../../data/dummy-data";

// My Components
import BarItemCard from "../../components/MainScreens/BarItemCard";
import DropDownMenu from "../../components/MainScreens/DropDownMenu";

const BarMenuScreen = props => {
  // get bar information and drinks information
  const barID = props.navigation.getParam("barID");
  const selectedBar = BARS.find(bar => bar.id === barID); // for bar card later
  const displayedDrinks = BARITEMS.filter(
    barItem => barItem.barId.indexOf(barID) >= 0
  );

  // return an object of unique subCategories // put in API soon
  const subCategories = [
    ...new Set(displayedDrinks.map(drink => drink.subCategory))
  ].map(subCategory => {
    return {
      id: displayedDrinks.find(barItem => barItem.subCategory === subCategory)
        .id,
      subCategory: subCategory
    };
  });
  ///////////////////////////////////////////

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

  const renderDropDownMenu = itemData => {
    // get an array of drinks based on category
    subCategoryDrinks = displayedDrinks.filter(
      drink => drink.subCategory === itemData.item.subCategory
    );

    return (
      <DropDownMenu
        title={itemData.item.subCategory}
        imageUrl={itemData.item.imageUrl}
      >
        <FlatList
          data={subCategoryDrinks}
          keyExtractor={(item, index) => item.id}
          renderItem={renderBarItem}
          style={styles.flatList}
        />
      </DropDownMenu>
    );
  };

  return (
    <FlatList
      data={subCategories}
      keyExtractor={(item, index) => item.id}
      renderItem={renderDropDownMenu}
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
    flex: 1,
    width: "100%",
    height: "100%",
    paddingLeft: 0 // remove the gap after the list is rendered
  }
});

export default BarMenuScreen;

// USING REDUX FOR: BARS

// Libraries
import React from "react";
import { View, StyleSheet, FlatList } from "react-native";

// Redux
import { useSelector } from "react-redux";

// data
import { BARITEMS } from "../../data/dummy-data";

// My Components
import BarItemCard from "../../components/MainScreens/BarItemCard";
import DropDownMenu from "../../components/MainScreens/DropDownMenu";
import ViewCartBanner from "../../components/Orders/ViewCartBanner";

const BarMenuScreen = props => {
  // Redux
  const BARS = useSelector(state => state.bars.bars);

  // get Bar information
  const barID = props.navigation.getParam("barID");
  const selectedBar = BARS.find(bar => bar.id === barID); // for bar card later

  // get Drinks information
  const displayedDrinks = BARITEMS.filter(
    barItem => barItem.barId.indexOf(barID) >= 0
  );

  // return an object of unique subCategories // PUT IN API SOON
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
    <View style={styles.screen}>
      <FlatList
        data={subCategories}
        keyExtractor={(item, index) => item.id}
        renderItem={renderDropDownMenu}
        style={styles.flatList}
      />
      <ViewCartBanner navigation={props.navigation} />
    </View>
  );
};

BarMenuScreen.navigationOptions = navigationData => {
  const selectedBarTitle = navigationData.navigation.getParam(
    "selectedBarTitle"
  );

  return {
    headerTitle: selectedBarTitle
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  flatList: {
    flex: 1,
    width: "100%",
    height: "100%",
    paddingLeft: 0 // remove the gap after the list is rendered
  }
});

export default BarMenuScreen;

// Libraries
import React from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

// My Components
import BarList from "../../components/MainScreens/BarList";
import CustomHeaderButton from "../../components/NavigationComponents/CustomHeaderButton";

// Data
import { BARS } from "../../data/dummy-data";

const HomeScreen = props => {
  return <BarList listData={BARS} navigation={props.navigation} />;
};

HomeScreen.navigationOptions = {
  headerTitle: "Home",
  headerRight: (
    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item
        title="Map"
        iconName="google-maps"
        onPress={() => {
          console.log("MAP VIEW!");
        }}
      />
    </HeaderButtons>
  )
};

export default HomeScreen;

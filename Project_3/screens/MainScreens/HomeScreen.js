// USING REDUX FOR: BARS

// Libraries
import React from "react";
import { View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

// Redux
import { useSelector } from "react-redux";

// My Components
import BarList from "../../components/MainScreens/BarList";
import CustomHeaderButton from "../../components/NavigationComponents/CustomHeaderButton";
import ViewCartBanner from "../../components/Orders/ViewCartBanner";

const HomeScreen = props => {
  const BARS = useSelector(state => state.bars.bars);
  return (
    <View style={{ flex: 1 }}>
      <BarList listData={BARS} navigation={props.navigation} />
      <ViewCartBanner navigation={props.navigation} />
    </View>
  );
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

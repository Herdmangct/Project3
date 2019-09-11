// USING REDUX FOR: BARS

// Libraries
import React from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

// Redux
import { useSelector } from "react-redux";

// My Components
import BarList from "../../components/MainScreens/BarList";
import CustomHeaderButton from "../../components/NavigationComponents/CustomHeaderButton";

const HomeScreen = props => {
  const BARS = useSelector(state => state.bars.bars);
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

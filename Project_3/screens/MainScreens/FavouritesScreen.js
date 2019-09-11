// USING REDUX FOR: BARS

// Libraries
import React from "react";

// Redux
import { useSelector } from "react-redux";

// My Components
import BarList from "../../components/MainScreens/BarList";

const FavouritesScreen = props => {
  const favBars = useSelector(state => state.bars.favouriteBars);
  return <BarList listData={favBars} navigation={props.navigation} />;
};

FavouritesScreen.navigationOptions = {
  headerTitle: "Your Favourites"
};

export default FavouritesScreen;

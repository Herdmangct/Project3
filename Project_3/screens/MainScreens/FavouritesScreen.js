import React from "react";

// Data
import { BARS } from "../../data/dummy-data";

// My Components
import BarList from "../../components/MainScreens/BarList";

const FavouritesScreen = props => {
  const favBars = BARS.filter(bar => bar.id === "b1" || bar.id === "b2");
  return <BarList listData={favBars} navigation={props.navigation} />;
};

FavouritesScreen.navigationOptions = {
  headerTitle: "Your Favourites"
};

export default FavouritesScreen;

// USING REDUX FOR: BARS

// Libraries
import React from "react";
import { View, StyleSheet } from "react-native";

// Redux
import { useSelector } from "react-redux";

// My Components
import BarList from "../../components/MainScreens/BarList";
import BodyText from "../../components/GeneralComponents/BodyText";

const FavouritesScreen = props => {
  const favBars = useSelector(state => state.bars.favouriteBars);

  if (favBars.length === 0 || !favBars) {
    return (
      <View style={styles.noFavourites}>
        <BodyText style={styles.bodyText} numberOfLines={2}>
          Stop programming all the time and find some favourite bars!
        </BodyText>
      </View>
    );
  }

  return <BarList listData={favBars} navigation={props.navigation} />;
};

FavouritesScreen.navigationOptions = {
  headerTitle: "Your Favourites"
};

const styles = StyleSheet.create({
  noFavourites: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  bodyText: {
    textAlign: "center"
  }
});

export default FavouritesScreen;

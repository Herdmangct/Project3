// Libraries
import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Platform
} from "react-native";

// My Components
import BarCard from "../../components/MainScreens/BarCard";

// Data
import { BARS } from "../../data/dummy-data";

// Constants
import Colors from "../../constants/Colors";

const HomeScreen = props => {
  const renderBarCard = itemData => {
    return (
      <TouchableOpacity
        delayPressIn={50}
        onPress={() => {
          props.navigation.navigate({
            routeName: "BarMenu",
            params: {
              barID: itemData.item.id
            }
          });
        }}
      >
        <BarCard
          title={itemData.item.title}
          image={itemData.item.imageURL}
          location={itemData.item.location}
        />
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={BARS}
      renderItem={renderBarCard}
      numColumns={1}
    />
  );
};

HomeScreen.navigationOptions = {
  headerTitle: "Home",
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primaryColor : ""
  },
  headerTintColor:
    Platform.OS === "android" ? Colors.accentColor : Colors.primaryColor,
  headerTitleStyle: {
    fontWeight: "bold"
  }
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  barCard: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 15,
    height: 150
  }
});

export default HomeScreen;

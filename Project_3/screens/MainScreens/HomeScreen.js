// Libraries
import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";

// My Components
import BarCard from "../../components/MainScreens/BarCard";
import CustomHeaderButton from "../../components/NavigationComponents/CustomHeaderButton";

// Data
import { BARS } from "../../data/dummy-data";

const HomeScreen = props => {
  const renderBarCard = itemData => {
    return (
      <BarCard
        title={itemData.item.title}
        image={itemData.item.imageURL}
        location={itemData.item.location}
        onSelect={() => {
          props.navigation.navigate({
            routeName: "BarMenu",
            params: {
              barID: itemData.item.id
            }
          });
        }}
      />
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

const styles = StyleSheet.create({});

export default HomeScreen;

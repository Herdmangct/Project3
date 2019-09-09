// Libraries
import React from "react";
import { FlatList, StyleSheet } from "react-native";

// My Components
import BarCard from "../../components/MainScreens/BarCard";

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
  headerTitle: "Home"
};

const styles = StyleSheet.create({});

export default HomeScreen;

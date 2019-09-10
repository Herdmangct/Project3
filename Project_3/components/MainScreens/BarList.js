import React from "react";
import { FlatList, StyleSheet } from "react-native";

// My Components
import BarCard from "../MainScreens/BarCard";

const BarList = props => {
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
      data={props.listData}
      keyExtractor={(item, index) => item.id}
      renderItem={renderBarCard}
      numColumns={1}
    />
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default BarList;

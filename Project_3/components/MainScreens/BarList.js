import React from "react";
import { FlatList, StyleSheet } from "react-native";

// My Components
import BarCard from "../MainScreens/BarCard";
import { setRecoveryProps } from "expo/build/ErrorRecovery/ErrorRecovery";

const BarList = props => {
  const renderBarCard = itemData => {
    return (
      <BarCard
        id={itemData.item.id}
        title={itemData.item.title}
        type={itemData.item.type}
        image={itemData.item.imageURL}
        location={itemData.item.location}
        onFavouritesScreen={props.onFavouritesScreen}
        onSelect={() => {
          props.navigation.navigate({
            routeName: "BarMenu",
            params: {
              barID: itemData.item.id,
              selectedBarTitle: itemData.item.title
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
      style={props.style}
    />
  );
};

const styles = StyleSheet.create({});

export default BarList;

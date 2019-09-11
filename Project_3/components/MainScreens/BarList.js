import React from "react";
import { FlatList, StyleSheet } from "react-native";

// My Components
import BarCard from "../MainScreens/BarCard";

const BarList = props => {
  const renderBarCard = itemData => {
    return (
      <BarCard
        title={itemData.item.title}
        type={itemData.item.type}
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
      style={props.style}
    />
  );
};

const styles = StyleSheet.create({});

export default BarList;

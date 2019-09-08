import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

// Purely responsible for layout
const BardCard = props => {
  return (
    <View style={styles.barCard}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: props.image }} />
      </View>
      <View style={styles.info}>
        <Text style={styles.title}>{props.title}</Text>
        <View style={styles.locTime}>
          <Text style={styles.location}>{props.location}</Text>
          <Text style={styles.ttd}>{"33 min walk"}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  barCard: {
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 5,
    backgroundColor: "white",
    height: 200,
    margin: 20
  },
  imageContainer: {
    width: "100%",
    height: "60%",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    overflow: "hidden"
  },
  image: {
    width: "100%",
    height: "100%"
  },
  info: {
    flex: 1,
    margin: 5
  },
  title: {
    fontSize: 18,
    marginVertical: 4
  },
  locTime: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between", // aligns the items on the main axis (horizontal)
    alignItems: "center" // aligns the items on the cross axis (vertical)
  },
  location: {
    fontSize: 12,
    color: "#888"
  },
  // Time to Destination
  ttd: {
    fontSize: 10,
    color: "#888"
  }
});

export default BardCard;

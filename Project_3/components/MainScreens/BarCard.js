import React from "react";
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback
} from "react-native";

// My Components
import BodyText from "../GeneralComponents/BodyText";
import HeaderText from "../GeneralComponents/HeaderText";

// Constants
import Colors from "../../constants/Colors";

// Purely responsible for layout
const BardCard = props => {
  let TouchableComponent = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableComponent = TouchableNativeFeedback;
  }
  return (
    <View style={styles.barCard}>
      <View style={styles.touchable}>
        <TouchableComponent
          useForeground
          delayPressIn={30}
          onPress={() => {
            props.onSelect();
          }}
        >
          <View style={styles.cardContainer}>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={{ uri: props.image }} />
            </View>
            <View style={styles.info}>
              <HeaderText style={styles.title}>{props.title}</HeaderText>
              <View style={styles.locTime}>
                <BodyText style={styles.location}>{props.location}</BodyText>
                <BodyText style={styles.timeToDestination}>
                  {"33 min walk"}
                </BodyText>
              </View>
            </View>
          </View>
        </TouchableComponent>
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
    height: 225,
    margin: 20
  },
  touchable: {
    borderRadius: 10,
    overflow: "hidden"
  },
  cardContainer: {
    height: "100%",
    width: "100%"
  },
  imageContainer: {
    width: "100%",
    height: "65%",
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
    color: Colors.smallTextColor
  },
  timeToDestination: {
    fontSize: 10,
    color: Colors.smallTextColor
  }
});

export default BardCard;

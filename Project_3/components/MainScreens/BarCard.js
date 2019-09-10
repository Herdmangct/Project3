import React from "react";
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback
} from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

// My Components
import BodyText from "../GeneralComponents/BodyText";
import HeaderText from "../GeneralComponents/HeaderText";
import BeerButton from "../Temporary/BeerButton";

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
              <TouchableComponent
                useForeground
                delayPressIn={30}
                onPress={() => {
                  console.log("BEER!");
                }}
              >
                <View style={styles.favourite}>
                  <Ionicons
                    name="ios-star-outline"
                    size={50}
                    color={Colors.accentColor}
                  />
                </View>
              </TouchableComponent>
              <Image style={styles.image} source={{ uri: props.image }} />
            </View>
            <View style={styles.info}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between"
                }}
              >
                <HeaderText style={styles.title}>{props.title}</HeaderText>

                <TouchableComponent
                  useForeground
                  delayPressIn={30}
                  onPress={() => {
                    console.log("BEER!");
                  }}
                >
                  <View style={styles.button}>
                    {/* <FontAwesome
                      name="glass"
                      size={75}
                      color={Colors.accentColor}
                    ></FontAwesome> */}
                    <Ionicons
                      name="ios-beer"
                      size={75}
                      color={Colors.accentColor}
                    />
                  </View>
                </TouchableComponent>
              </View>
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

const borderRadiusVar = 5;

const styles = StyleSheet.create({
  barCard: {
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: borderRadiusVar,
    backgroundColor: "white",
    height: 225,
    margin: 20
  },
  touchable: {
    borderRadius: borderRadiusVar,
    overflow: "hidden"
  },
  cardContainer: {
    height: "100%",
    width: "100%"
  },
  imageContainer: {
    width: "100%",
    height: "65%",
    borderTopLeftRadius: borderRadiusVar,
    borderTopRightRadius: borderRadiusVar,
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
    width: "70%",
    marginVertical: 4
  },
  button: {
    position: "absolute",
    top: -50,
    right: 5,
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden"
  },
  favourite: {
    position: "absolute",
    top: -15,
    left: -15,
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    zIndex: 1
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

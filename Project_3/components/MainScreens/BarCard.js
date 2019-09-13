import React, { useCallback } from "react";
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback,
  TouchableWithoutFeedback
} from "react-native";
import {
  Ionicons,
  FontAwesome,
  MaterialCommunityIcons
} from "@expo/vector-icons";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { toggleFavourite } from "../../store/actions/bars";

// My Components
import BodyText from "../GeneralComponents/BodyText";
import HeaderText from "../GeneralComponents/HeaderText";
import BeerButton from "../Temporary/BeerButton";

// Constants
import Colors from "../../constants/Colors";

const BardCard = props => {
  const barId = props.id;

  // Redux favouriting
  const dispatch = useDispatch();
  const toggleFavouriteHandler = useCallback(() => {
    // useCallBack to run function once
    dispatch(toggleFavourite(barId)); // dispatch toggleFavourite action in actions
  }, [dispatch, barId]);

  // Switch favouriting icon
  const isFavourite = useSelector(state =>
    state.bars.favouriteBars.some(bar => bar.id === barId)
  );

  // TouchableComponent
  let TouchableComponent = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableComponent = TouchableNativeFeedback;
  }

  // change favourites icon to cross when on favourites screen
  let FavouritesIcon;
  let OnIcon;
  let OffIcon;
  if (props.onFavouritesScreen) {
    FavouritesIcon = MaterialCommunityIcons;
    OnIcon = "close";
    OffIcon = "close";
  } else {
    FavouritesIcon = FontAwesome;
    OnIcon = "heart";
    OffIcon = "heart-o";
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
              <TouchableWithoutFeedback
                useForeground
                onPress={() => {
                  toggleFavouriteHandler();
                }}
              >
                <View style={styles.favourite}>
                  <FavouritesIcon
                    name={isFavourite ? OnIcon : OffIcon}
                    size={42}
                    color={Colors.accentColor}
                  />
                  {/* <Ionicons
                    name={isFavourite ? "md-star" : "md-star-outline"}
                    size={50}
                    color={Colors.accentColor}
                  /> */}
                </View>
              </TouchableWithoutFeedback>
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

                <View style={styles.barPubDecoration}>
                  {/* <MaterialCommunityIcons
                    name="bottle-wine"
                    size={100}
                    color={Colors.accentColor}
                  ></MaterialCommunityIcons> */}
                  <Ionicons
                    name={props.type === "Pub" ? "ios-beer" : "ios-wine"}
                    size={props.type === "Pub" ? 75 : 100}
                    color={Colors.accentColor}
                  />
                </View>
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
  barPubDecoration: {
    position: "absolute",
    top: -50,
    right: -5,
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden"
  },
  favourite: {
    position: "absolute",
    top: -50,
    left: -47,
    width: 150,
    height: 150,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
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

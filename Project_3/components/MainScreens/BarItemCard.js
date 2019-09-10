import React from "react";
import {
  View,
  Image,
  TouchableOpacity,
  TouchableNativeFeedback,
  StyleSheet,
  Platform
} from "react-native";

// My Components
import BodyText from "../GeneralComponents/BodyText";
import HeaderText from "../GeneralComponents/HeaderText";

// Constants
import Colors from "../../constants/Colors";

// Purely responsible for layout
const BarItemDropDown = props => {
  let TouchableComponent = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableComponent = TouchableNativeFeedback;
  }
  return (
    <View style={styles.barItem}>
      <View style={styles.touchableContainer}>
        <TouchableComponent
          onPress={props.onSelectBarItem}
          style={styles.touchable}
        >
          <View style={styles.cardContainer}>
            <View style={styles.imageContainer}>
              <Image source={{ uri: props.imageUrl }} style={styles.image} />
            </View>
            <View style={styles.infoContainer}>
              <View style={{ ...styles.barItemRow, ...styles.barItemHeader }}>
                <HeaderText>{props.title}</HeaderText>
              </View>
              <View style={{ ...styles.barItemRow, ...styles.barItemDetail }}>
                <BodyText style={styles.detailText}>
                  {props.servingSize} {props.servingUnit}
                </BodyText>
              </View>
              <View style={{ ...styles.barItemRow, ...styles.barItemDetail }}>
                <BodyText style={styles.detailText}>
                  ${props.price.toFixed(2)}
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
  barItem: {
    height: 110,
    width: "100%",
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.primaryColor
  },
  touchableContainer: {
    overflow: "hidden"
  },
  touchable: {
    width: "100%",
    height: "100%",
    overflow: "hidden"
  },
  cardContainer: {
    height: "100%",
    width: "100%",
    padding: 15,
    flexDirection: "row",
    alignItems: "center"
  },
  imageContainer: {
    height: "100%",
    width: "12.5%",
    overflow: "hidden"
  },
  image: {
    height: "100%",
    width: "100%"
  },
  infoContainer: {
    padding: 10,
    justifyContent: "center"
  },
  barItemHeader: {},
  barItemDetail: {},
  detailText: {
    fontSize: 14,
    color: Colors.smallTextColor
  },
  barItemRow: {
    flexDirection: "row"
  }
});

export default BarItemDropDown;

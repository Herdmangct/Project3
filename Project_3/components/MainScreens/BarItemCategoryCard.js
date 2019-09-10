import React from "react";
import {
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
  StyleSheet,
  Platform
} from "react-native";

// My Components
import HeaderText from "../GeneralComponents/HeaderText";

// Constants
import Colors from "../../constants/Colors";

// Purely responsible for layout
const BarItemCategoryCard = props => {
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
            <View style={styles.infoContainer}>
              <View style={styles.barItemRow}>
                <HeaderText>{props.subCategory}</HeaderText>
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
  infoContainer: {
    padding: 10,
    justifyContent: "center"
  },
  barItemRow: {
    flexDirection: "row"
  }
});

export default BarItemCategoryCard;

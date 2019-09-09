import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableNativeFeedback,
  StyleSheet,
  Platform
} from "react-native";
import { Divider } from "react-native-material-ui";
import Colors from "../../constants/Colors";

// Purely responsible for layout
const BarItemDropDown = props => {
  let TouchableComponent = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableComponent = TouchableNativeFeedback;
  }
  return (
    <View style={styles.barItem}>
      <TouchableComponent onPress={props.onSelectBarItem}>
        <View>
          <View style={styles.infoContainer}>
            <View style={{ ...styles.barItemRow, ...styles.barItemHeader }}>
              <Text style={styles.header}>{props.title}</Text>
            </View>
            <View style={{ ...styles.barItemRow, ...styles.barItemDetail }}>
              <Text>
                {props.servingSize} {props.servingUnit}
              </Text>
            </View>
            <View style={{ ...styles.barItemRow, ...styles.barItemDetail }}>
              <Text>${props.price.toFixed(2)}</Text>
            </View>
          </View>
        </View>
      </TouchableComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  barItem: {
    height: 75,
    width: "100%",
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.primaryColor
  },
  infoContainer: {
    margin: 10
  },
  barItemHeader: {},
  header: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.primaryColor
  },
  barItemDetail: {},
  barItemRow: {
    flexDirection: "row"
  }
});

export default BarItemDropDown;

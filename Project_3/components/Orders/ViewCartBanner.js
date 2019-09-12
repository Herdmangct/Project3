import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform
} from "react-native";
import _ from "underscore";

// Redux
import { useSelector } from "react-redux";

// My Components
import HeaderText from "../GeneralComponents/HeaderText";

// Constants
import Colors from "../../constants/Colors";

// Purely responsible for layout
const ViewCartBanner = props => {
  // TouchableComponent
  let TouchableComponent = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableComponent = TouchableNativeFeedback;
  }

  const cartItems = useSelector(state => state.cart.items);

  if (_.isEmpty(cartItems)) {
    return <View></View>;
  }

  return (
    <View style={styles.touchable}>
      <TouchableComponent
        useForeground
        background={TouchableNativeFeedback.Ripple(Colors.accentColor, false)}
        delayPressIn={30}
        onPress={() => {
          props.navigation.navigate({
            routeName: "OrderCart"
          });
        }}
      >
        <View style={styles.content}>
          <HeaderText style={{ color: Colors.accentColor }}>
            VIEW ORDER
          </HeaderText>
        </View>
      </TouchableComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  touchable: {
    height: 70,
    padding: 8
  },
  content: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primaryColor,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 5,
    overflow: "hidden"
  }
});

export default ViewCartBanner;

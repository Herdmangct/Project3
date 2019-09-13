import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform
} from "react-native";

// Redux
import { useDispatch } from "react-redux";
import * as cartActions from "../../store/actions/cart";

// My Components
import HeaderText from "../GeneralComponents/HeaderText";

// Constants
import Colors from "../../constants/Colors";

// Purely responsible for layout
const OrderButton = props => {
  // Redux
  const dispatch = useDispatch();

  // TouchableComponent
  let TouchableComponent = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableComponent = TouchableNativeFeedback;
  }

  return (
    <View style={styles.touchable}>
      <TouchableComponent
        useForeground
        background={TouchableNativeFeedback.Ripple(Colors.accentColor, false)}
        delayPressIn={30}
        onPress={() => {
          dispatch(cartActions.addToCart(props.barItem));
          props.navigation.goBack();
          alert(`${props.itemTitle} added to your cart!`);
        }}
      >
        <View style={styles.content}>
          <HeaderText style={{ color: Colors.accentColor }}>
            ADD TO ORDER
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

export default OrderButton;

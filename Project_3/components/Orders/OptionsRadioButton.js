import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform
} from "react-native";
import { List, Checkbox, RadioButton } from "react-native-paper";

// My Components
import HeaderText from "../GeneralComponents/HeaderText";

// Constants
import Colors from "../../constants/Colors";

// Purely responsible for layout
const OptionsRadioButton = props => {
  // TouchableComponent
  let TouchableComponent = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableComponent = TouchableNativeFeedback;
  }

  return (
    <View style={styles.touchable}>
      <TouchableComponent
        useForeground
        delayPressIn={30}
        onPress={() => {
          props.setCheckedStatus(props.title);
        }}
      >
        <View>
          <List.Item
            title={<HeaderText>{props.title}</HeaderText>}
            left={() => (
              <RadioButton
                value={props.title}
                status={props.checked === props.title ? "checked" : "unchecked"}
                color={"#b9b9b9"}
              />
            )}
            style={styles.listItem}
          />
        </View>
      </TouchableComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  touchable: {
    overflow: "hidden"
  },
  listItem: {
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.primaryColor
  }
});

export default OptionsRadioButton;

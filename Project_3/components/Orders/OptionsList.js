import React, { useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";

// My Components
import OptionsHeader from "./OptionsHeader";
import OptionsRadioButton from "./OptionsRadioButton";

const OptionsList = props => {
  // RadioButton State
  const [checkedStatus, setCheckedStatus] = useState(props.listData[0]);

  const renderOptionsRadioButton = itemData => {
    return (
      <OptionsRadioButton
        title={itemData.item}
        checked={checkedStatus}
        setCheckedStatus={setCheckedStatus}
      />
    );
  };

  return (
    <View>
      <OptionsHeader title={props.title} />
      <FlatList
        extraData={checkedStatus}
        data={props.listData}
        keyExtractor={(item, index) => item + index}
        renderItem={renderOptionsRadioButton}
        style={props.style}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default OptionsList;

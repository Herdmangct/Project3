import React, { useState } from "react";
import { View, StyleSheet, SectionList, FlatList } from "react-native";

// Data
import { BARITEMS } from "../../data/dummy-data";

// My Components
import HeaderText from "../../components/GeneralComponents/HeaderText";
import BodyText from "../../components/GeneralComponents/BodyText";
import OptionsHeader from "./OptionsHeader";
import OptionsRadioButton from "./OptionsRadioButton";

// constants
import Colors from "../../constants/Colors";

const OptionsList = props => {
  // RadioButton
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

{
  /* <SectionList
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        sections={[
          { title: "CHOOSE SIZE", data: ["Single", "Double"] },
          { title: "CHOOSE MIXER", data: ["Coke", "Lemonade", "On the rocks"] },
          { title: "SPECIAL REQUESTS", data: ["item5", "item6"] }
        ]}
        keyExtractor={(item, index) => item + index}
      /> */
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default OptionsList;

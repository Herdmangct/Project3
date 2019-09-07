import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  const [outputText, setOutputText] = useState("1) This is the initial state");
  return (
    <View style={styles.container}>
      <Text>{outputText}</Text>
      <Button
        title={"Click Me"}
        onPress={() =>
          setOutputText("2) This is the state after a button press!")
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

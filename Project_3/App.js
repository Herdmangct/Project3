// Libraries
import React, { useState } from "react";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { useScreens } from "react-native-screens";
import { createStore, combineReducers } from "redux";

// My Components
import MainNavigator from "./navigation/MainNavigator";

// Redux
import barsReducer from "./store/reducers/bars";
import cartReducer from "./store/reducers/cart";
import { Provider } from "react-redux";

useScreens();

// Redux
const rootReducer = combineReducers({
  bars: barsReducer,
  cart: cartReducer
});
const store = createStore(rootReducer);

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf")
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false); // initially set font loaded to false

  // 1) Only try using the fonts once they are loaded
  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts} // fetchFonts returns true once loaded // put in promise
        onFinish={() => setFontLoaded(true)} // keep splash screen open until fonts are loaded
      />
    );
  }

  // 2) Load the page once fonts are loaded
  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
}

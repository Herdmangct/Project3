import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
// import { createTabsNavigator } from "react-navigation-tabs";
// import { createDrawerNavigator } from "react-navigation-drawer";

// Main Screens
import HomeScreen from "../screens/MainScreens/HomeScreen";
import BarMenuScreen from "../screens/MainScreens/BarMenuScreen";

// Order Screens
import OrderOptionsScreen from "../screens/OrderScreens/OrderOptionsScreen";

// returns a navigator object that has a stack of different screens
const MainNavigator = createStackNavigator({
  Home: HomeScreen,
  OrderOptions: OrderOptionsScreen,
  BarMenu: BarMenuScreen
});

export default createAppContainer(MainNavigator);

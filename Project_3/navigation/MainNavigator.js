// Libraries
import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
// import { createDrawerNavigator } from "react-navigation-drawer";
import { Ionicons } from "@expo/vector-icons";

// Main Screens
import HomeScreen from "../screens/MainScreens/HomeScreen";
import BarMenuScreen from "../screens/MainScreens/BarMenuScreen";
import QRCodeScreen from "../screens/MainScreens/QRCodeScreen";
import ProfileScreen from "../screens/MainScreens/ProfileScreen";

// Order Screens
import OrderOptionsScreen from "../screens/OrderScreens/OrderOptionsScreen";

// Constants
import Colors from "../constants/Colors";

// returns a navigator object that has a stack of different screens
const BackandForthNavigator = createStackNavigator({
  Home: HomeScreen,
  OrderOptions: OrderOptionsScreen,
  BarMenu: BarMenuScreen
});

// root navigator because BackandForthNavigator nested in this navigator
const MainScreenTabsNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: BackandForthNavigator,
      navigationOptions: {
        tabBarIcon: tabInfo => {
          return (
            <Ionicons name="ios-beer" size={25} color={tabInfo.tintColor} />
          );
        }
      }
    },
    QRCode: {
      screen: QRCodeScreen,
      navigationOptions: {
        tabBarLabel: "Scan",
        tabBarIcon: tabInfo => {
          return (
            <Ionicons
              name="ios-qr-scanner"
              size={25}
              color={tabInfo.tintColor}
            />
          );
        }
      }
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarIcon: tabInfo => {
          return (
            <Ionicons name="ios-person" size={25} color={tabInfo.tintColor} />
          );
        }
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: Colors.primaryColor
    }
  }
);

export default createAppContainer(MainScreenTabsNavigator);

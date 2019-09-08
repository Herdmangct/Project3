// Libraries
import React from "react";
import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
// import { createDrawerNavigator } from "react-navigation-drawer";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

// Main Screens
import HomeScreen from "../screens/MainScreens/HomeScreen";
import BarMenuScreen from "../screens/MainScreens/BarMenuScreen";
import QRCodeScreen from "../screens/MainScreens/QRCodeScreen";
import ProfileScreen from "../screens/MainScreens/ProfileScreen";

// Order Screens
import OrderOptionsScreen from "../screens/OrderScreens/OrderOptionsScreen";

// Constants
import Colors from "../constants/Colors";

// #1 Navigator
// returns a navigator object that has a stack of different screens
const BackandForthNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    OrderOptions: OrderOptionsScreen,
    BarMenu: BarMenuScreen
  },
  {
    mode: "card", // change to modal for slide up from bottom of screen
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primaryColor : ""
      },
      headerTintColor:
        Platform.OS === "android" ? Colors.accentColor : Colors.primaryColor,
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);

const tabScreenConfig = {
  Home: {
    screen: BackandForthNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return <Ionicons name="ios-beer" size={25} color={tabInfo.tintColor} />;
      }
    }
  },
  QRCode: {
    screen: QRCodeScreen,
    navigationOptions: {
      tabBarLabel: "Scan",
      tabBarIcon: tabInfo => {
        return (
          <Ionicons name="ios-qr-scanner" size={25} color={tabInfo.tintColor} />
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
};

// #2 Navigator
// root navigator because BackandForthNavigator nested in this navigator
const MainScreenTabsNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeTintColor: Colors.primaryColor,
        shifting: true,
        labeled: true,
        barStyle: {
          backgroundColor: "white"
        }
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          activeTintColor: Colors.primaryColor
        }
      });

export default createAppContainer(MainScreenTabsNavigator);

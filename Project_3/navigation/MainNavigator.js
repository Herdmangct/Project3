// Libraries
import React from "react";
import { Text, StyleSheet } from "react-native";
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
import FavouritesScreen from "../screens/MainScreens/FavouritesScreen";

// Order Screens
import OrderOptionsScreen from "../screens/OrderScreens/OrderOptionsScreen";

// Constants
import Colors from "../constants/Colors";
import Fonts from "../constants/Fonts";

const styles = StyleSheet.create({
  tabScreenLabel: {
    fontFamily: Fonts.headerTextFont
  }
});

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primaryColor : ""
  },
  headerTintColor:
    Platform.OS === "android" ? Colors.accentColor : Colors.primaryColor,
  headerTitleStyle: {
    fontFamily: Fonts.headerTextFont
  },
  headerBackTitleStyle: {
    fontFamily: Fonts.bodyTextFont
  }
};

// #1 Navigator - Stack Navigator
// returns a navigator object that has a stack of different screens
const BackandForthNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    OrderOptions: OrderOptionsScreen,
    BarMenu: BarMenuScreen
  },
  {
    mode: "card", // change to modal for slide up from bottom of screen ios
    defaultNavigationOptions: defaultStackNavOptions
  }
);

const FavouritesStackNavigator = createStackNavigator(
  {
    Profile: ProfileScreen,
    Favourites: FavouritesScreen,
    BarMenu: BarMenuScreen
  },
  {
    defaultNavigationOptions: defaultStackNavOptions
  }
);

const tabScreenConfig = {
  Home: {
    screen: BackandForthNavigator,
    navigationOptions: {
      tabBarLabel: <Text style={styles.tabScreenLabel}>Home</Text>,
      tabBarIcon: tabInfo => {
        return <Ionicons name="ios-beer" size={25} color={tabInfo.tintColor} />;
      }
    }
  },
  QRCode: {
    screen: QRCodeScreen,
    navigationOptions: {
      tabBarLabel: <Text style={styles.tabScreenLabel}>Scan</Text>,
      tabBarIcon: tabInfo => {
        return (
          <Ionicons name="ios-qr-scanner" size={25} color={tabInfo.tintColor} />
        );
      }
    }
  },
  Profile: {
    screen: FavouritesStackNavigator,
    navigationOptions: {
      tabBarLabel: <Text style={styles.tabScreenLabel}>Profile</Text>,
      tabBarIcon: tabInfo => {
        return (
          <Ionicons name="ios-person" size={25} color={tabInfo.tintColor} />
        );
      }
    }
  }
};

// #2 Navigator Tab Navigator
// root navigator because BackandForthNavigator nested in this navigator
const MainScreenTabsNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeTintColor: Colors.primaryColor,
        shifting: true,
        labeled: true,
        barStyle: {
          backgroundColor: Colors.accentColor
        }
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          activeTintColor: Colors.primaryColor
        }
      });

export default createAppContainer(MainScreenTabsNavigator);

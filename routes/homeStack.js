import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/home";
import Details from "../screens/details";
import Header from "../shared/header";
import React from "react";

const screens = {
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => (
          <Header navigation={navigation} title="Review Arena" />
        ),
      };
    },
  },
  Details: {
    screen: Details,
    navigationOptions: {
      title: "Details",
    },
  },
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: { backgroundColor: "#292727", height: 90 },
    headerTintColor: "#fff",
  },
});

export default HomeStack;

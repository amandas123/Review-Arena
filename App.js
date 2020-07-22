import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Home from "./screens/home";
import Navigator from "./routes/draw";

export default function App() {
  return <Navigator />;
}

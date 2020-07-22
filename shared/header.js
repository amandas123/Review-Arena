import React from "react";
import { StyleSheet, View, Text, Image, ImageBackground } from "react-native";
import { globalStyles } from "../styles/global";
import { MaterialIcons } from "@expo/vector-icons";

export default function Header({ navigation, title }) {
  const pressHandler = () => {
    navigation.openDrawer();
  };
  return (
    <ImageBackground style={styles.header}>
      <MaterialIcons
        name="menu"
        size={28}
        color="white"
        onPress={pressHandler}
        style={styles.icon}
      />
      <View style={styles.headerTitle}>
        <Image
          source={require("../assets/review.png")}
          style={styles.headerImage}
        />
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
    letterSpacing: 1,
  },
  icon: {
    position: "absolute",
    left: 16,
  },
  headerImage: {
    width: 30,
    height: 30,
    marginHorizontal: 10,
  },
  headerTitle: {
    flexDirection: "row",
  },
});

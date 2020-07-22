import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { globalStyles, images } from "../styles/global";
import Card from "../shared/card";

export default function Details({ navigation }) {
  const rating = navigation.getParam("rating");
  return (
    <View style={globalStyles.container}>
      <Card>
        <Text>{navigation.getParam("title")} </Text>
        <Text>{navigation.getParam("body")} </Text>
        <View style={styles.rating}>
          <Text>Review Rating: </Text>
          <Image style={styles.image} source={images.ratings[rating]} />
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  rating: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },

  image: {
    flex: 1,
    aspectRatio: 1.5,
    resizeMode: "contain",
    marginHorizontal: 50,
    marginTop: -25,
  },
});

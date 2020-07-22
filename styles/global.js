import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  titleText: {
    fontFamily: "serif",
    fontSize: 18,
    color: "#333",
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#574f4f",
    padding: 15,
    fontSize: 18,
    borderRadius: 10,
    marginVertical: 10,
    fontFamily: "serif",
  },
  errormsg: {
    color: "crimson",
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 6,
    textAlign: "center",
  },
});

export const images = {
  ratings: {
    "1": require("../assets/one-star.jpg"),
    "2": require("../assets/two-star.jpg"),
    "3": require("../assets/three-star.jpg"),
    "4": require("../assets/four-star.png"),
    "5": require("../assets/five-star.jpg"),
  },
};

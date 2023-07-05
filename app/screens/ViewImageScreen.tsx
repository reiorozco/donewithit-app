import React from "react";
import { Image, StyleSheet, View } from "react-native";

function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}></View>
      <View style={styles.deleteIcon}></View>

      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/chair.jpg")}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    backgroundColor: "#fc5c65",
    height: 50,
    left: 30,
    position: "absolute",
    top: 40,
    width: 50,
  },
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  deleteIcon: {
    backgroundColor: "#4ecdc4",
    height: 50,
    right: 30,
    position: "absolute",
    top: 40,
    width: 50,
  },
  image: {
    height: "100%",
    width: "100%",
  },
});

export default ViewImageScreen;

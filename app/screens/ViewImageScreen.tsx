import React from "react";
import { Image, StyleSheet, View } from "react-native";

import COLORS from "../config/colors";

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
    backgroundColor: COLORS.primary,
    height: 50,
    left: 30,
    position: "absolute",
    top: 40,
    width: 50,
  },
  container: {
    backgroundColor: COLORS.black,
    flex: 1,
  },
  deleteIcon: {
    backgroundColor: COLORS.secondary,
    height: 50,
    position: "absolute",
    right: 30,
    top: 40,
    width: 50,
  },
  image: {
    height: "100%",
    width: "100%",
  },
});

export default ViewImageScreen;

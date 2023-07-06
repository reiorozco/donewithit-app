import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import COLORS from "../config/colors";

function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name="close" color="white" size={35} />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          color="white"
          size={35}
        />
      </View>

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
    left: 30,
    position: "absolute",
    top: 40,
  },
  container: {
    backgroundColor: COLORS.black,
    flex: 1,
  },
  deleteIcon: {
    position: "absolute",
    right: 30,
    top: 40,
  },
  image: {
    height: "100%",
    width: "100%",
  },
});

export default ViewImageScreen;

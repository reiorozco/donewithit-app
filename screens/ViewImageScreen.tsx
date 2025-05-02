import React from "react";
import { StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "@/constants/colors";

const imageSource = require("@/assets/images/chair.jpg");

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

      <Image contentFit="contain" source={imageSource} style={styles.image} />
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
    backgroundColor: colors.black,
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

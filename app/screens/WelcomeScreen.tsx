import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

import COLORS from "../config/colors";

function WelcomeScreen() {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo.png")} />

        <Text>Sell What You Don't Need</Text>
      </View>

      <View style={styles.loginButton}></View>

      <View style={styles.registerButton}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    alignItems: "center",
    flex: 1,
    justifyContent: "flex-end",
  },
  loginButton: {
    backgroundColor: COLORS.primary,
    height: 70,
    width: "100%",
  },
  logo: {
    height: 100,
    width: 100,
  },
  logoContainer: {
    alignItems: "center",
    position: "absolute",
    top: 70,
  },
  registerButton: {
    backgroundColor: COLORS.secondary,
    height: 70,
    width: "100%",
  },
});

export default WelcomeScreen;

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Image, ImageBackground } from "expo-image";
import { useRouter } from "expo-router";

import AppButton from "@/components/AppButton";

const backgroundSource = require("@/assets/images/background.jpg");
const logoSource = require("@/assets/images/logo.png");

function WelcomeScreen() {
  const router = useRouter();

  return (
    <ImageBackground
      blurRadius={5}
      source={backgroundSource}
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        <Image source={logoSource} style={styles.logo} />

        <Text style={styles.tagLine}>Sell What You Don&#39;t Need</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <AppButton onPress={() => router.push("/")} title="Login" />

        <AppButton
          color="secondary"
          onPress={() => router.push("/register")}
          title="Register"
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    alignItems: "center",
    flex: 1,
    justifyContent: "flex-end",
  },
  buttonsContainer: {
    padding: 20,
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
  tagLine: {
    fontSize: 24,
    fontWeight: "500",
    paddingVertical: 20,
  },
});

export default WelcomeScreen;

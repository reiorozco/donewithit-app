import React from "react";
import { StyleSheet, View } from "react-native";
import LottieView from "lottie-react-native";

interface Props {
  visible: boolean;
}

function AppActivityIndicator({ visible = false }: Props) {
  if (!visible) return null;

  return (
    <View style={styles.animationContainer}>
      <LottieView
        autoPlay
        loop
        style={{
          width: 200,
          height: 200,
        }}
        source={require("../assets/animations/material-wave-loader.json")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  animationContainer: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});

export default AppActivityIndicator;

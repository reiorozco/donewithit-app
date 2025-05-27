import React from "react";
import { StyleSheet, View } from "react-native";
import LottieView from "lottie-react-native";

function AppActivityIndicator({ visible = true }: { visible?: boolean }) {
  if (!visible) return null;

  return (
    <View style={styles.overlay}>
      <LottieView
        autoPlay
        loop
        source={require("../assets/animations/loader-lottie.json")}
        style={styles.loading}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  loading: {
    alignItems: "center",
    backgroundColor: "#eee",
    flex: 1,
    justifyContent: "center",
  },
  overlay: {
    backgroundColor: "white",
    height: "100%",
    opacity: 0.8,
    position: "absolute",
    width: "100%",
    zIndex: 1,
  },
});

export default AppActivityIndicator;

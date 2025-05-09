import React from "react";
import { StyleSheet } from "react-native";
import LottieView from "lottie-react-native";

function AppActivityIndicator({ visible = true }: { visible?: boolean }) {
  if (!visible) return null;

  return (
    <LottieView
      autoPlay
      // ref={animation}
      source={require("../assets/animations/loader-lottie.json")}
      style={styles.loading}
    />
  );
}

const styles = StyleSheet.create({
  loading: {
    alignItems: "center",
    backgroundColor: "#eee",
    flex: 1,
    justifyContent: "center",
  },
});

export default AppActivityIndicator;

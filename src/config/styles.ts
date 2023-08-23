import { Platform, StyleSheet } from "react-native";

import colors from "./colors";

const defaultStyles = StyleSheet.create({
  text: {
    color: colors.dark,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    fontSize: 18,
  },
});

export default defaultStyles;

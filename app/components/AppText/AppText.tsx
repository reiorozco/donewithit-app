import React, { ReactNode } from "react";
import { Platform, StyleSheet, Text } from "react-native";

interface Props {
  children: ReactNode;
  style?: any;
}

function AppText({ children, style }: Props) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",

    // ...Platform.select({
    //   android: {
    //     fontSize: 20,
    //     fontFamily: "Roboto",
    //   },
    //   ios: {
    //     fontSize: 18,
    //     fontFamily: "Avenir",
    //   },
    // }),
  },
});

export default AppText;

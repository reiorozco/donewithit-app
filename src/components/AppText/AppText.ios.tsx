import React, { ReactNode } from "react";
import { StyleSheet, Text } from "react-native";

interface Props {
  children: ReactNode;
  style?: any;
}

function AppText({ children, style }: Props) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    // color: "tomato",
    fontSize: 18,
    fontFamily: "Avenir",
  },
});

export default AppText;

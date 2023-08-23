import React, { ReactNode } from "react";
import { Platform, StyleSheet, Text, TextProps } from "react-native";

import defaultStyles from "../../config/styles";

interface Props extends TextProps {
  children: ReactNode;
  style?: any;
}

function AppText({ children, style, ...otherTextProps }: Props) {
  return (
    <Text style={[defaultStyles.text, style]} {...otherTextProps}>
      {children}
    </Text>
  );
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

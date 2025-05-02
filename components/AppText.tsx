import React, { PropsWithChildren } from "react";
import { Text, TextProps } from "react-native";

import defaultStyles from "@/constants/styles";

interface Props extends TextProps, PropsWithChildren {
  style?: any;
}

function AppText({ children, style, ...otherTextProps }: Props) {
  return (
    <Text style={[defaultStyles.text, style]} {...otherTextProps}>
      {children}
    </Text>
  );
}

export default AppText;

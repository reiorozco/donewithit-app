import React, { PropsWithChildren } from "react";
import Constants from "expo-constants";
import {
  SafeAreaView,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";

interface Props extends PropsWithChildren {
  style?: StyleProp<ViewStyle>;
}

function Screen({ children, style }: Props) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[styles.view, style]}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  view: {
    flex: 1,
  },
});

export default Screen;

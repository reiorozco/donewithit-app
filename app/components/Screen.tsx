import React, { ReactNode } from "react";
import { StatusBar as StatusBarExpo } from "expo-status-bar";
import { Platform, SafeAreaView, StatusBar, StyleSheet } from "react-native";

interface Props {
  children: ReactNode;
}

function Screen({ children }: Props) {
  return (
    <SafeAreaView style={styles.screen}>
      {children}

      <StatusBarExpo style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default Screen;

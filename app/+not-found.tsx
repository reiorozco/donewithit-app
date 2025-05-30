import React from "react";
import { StyleSheet, View } from "react-native";
import { Link, Stack } from "expo-router";

import colors from "@/constants/colors";
import routes from "@/constants/routes";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops! Not Found" }} />

      <View style={styles.container}>
        <Link href={routes.HOME} style={styles.button}>
          Go back to Home screen!
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    color: colors.white,
    fontSize: 20,
    textDecorationLine: "underline",
  },
  container: {
    alignItems: "center",
    backgroundColor: colors.light,
    flex: 1,
    justifyContent: "center",
  },
});

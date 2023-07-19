import React from "react";

import AppText from "./AppText";
import { StyleSheet } from "react-native";

import colors from "../config/colors";

interface Props {
  error?: string;
}

function ErrorMessage({ error }: Props) {
  if (!error) return null;

  return <AppText style={styles.error}>{error}</AppText>;
}

const styles = StyleSheet.create({
  error: {
    color: colors.danger,
    fontWeight: "bold",
  },
});

export default ErrorMessage;

import React from "react";

import AppText from "../AppText";
import { StyleSheet } from "react-native";

import colors from "../../config/colors";

interface Props {
  error?: string;
  visible?: boolean;
}

function ErrorMessage({ error, visible }: Props) {
  if (!visible || !error) return null;

  return <AppText style={styles.error}>{error}</AppText>;
}

const styles = StyleSheet.create({
  error: {
    color: colors.danger,
    fontWeight: "bold",
  },
});

export default ErrorMessage;

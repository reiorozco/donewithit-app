import React from "react";
import { StyleSheet } from "react-native";

import AppText from "@/components/AppText";
import colors from "@/constants/colors";

function ErrorMessage({ error }: { error?: string }) {
  if (!error) return null;

  return <AppText style={styles.textError}>{error}</AppText>;
}

const styles = StyleSheet.create({
  textError: {
    color: colors.danger,
    fontSize: 15,
    marginLeft: 10,
  },
});

export default ErrorMessage;

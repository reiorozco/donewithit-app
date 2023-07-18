import React from "react";
import { StyleSheet, TextInputProps, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "./AppText";

import colors from "../config/colors";

interface Props extends TextInputProps {
  placeholder: string;
  icon?: "apps";
}

function AppPicker({ icon, placeholder, ...textInputProps }: Props) {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={colors.medium}
          style={styles.icon}
        />
      )}

      <AppText style={styles.text}>{placeholder}</AppText>

      <MaterialCommunityIcons
        name="chevron-down"
        size={20}
        color={colors.medium}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    marginVertical: 10,
    padding: 15,
    width: "100%",
  },
  icon: {
    marginRight: 10,
  },
  text: {
    flex: 1,
  },
});

export default AppPicker;

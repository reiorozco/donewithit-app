import React from "react";
import {
  Platform,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

interface Props extends TextInputProps {
  icon?: "email";
}

function AppTextInput({ icon, ...textInputProps }: Props) {
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

      <TextInput style={styles.textInput} {...textInputProps} />
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
  textInput: {
    color: colors.dark,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    fontSize: 18,
  },
});

export default AppTextInput;

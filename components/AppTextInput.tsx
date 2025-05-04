import React from "react";
import { StyleSheet, TextInput, TextInputProps, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "@/constants/colors";
import defaultStyles from "@/constants/styles";

export interface AppTextInputProps extends TextInputProps {
  icon?: keyof typeof MaterialCommunityIcons.glyphMap;
}

function AppTextInput({ icon, ...otherProps }: AppTextInputProps) {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          color={colors.medium}
          name={icon}
          size={20}
          style={styles.icon}
        />
      )}

      <TextInput
        placeholderTextColor={colors.medium}
        style={[defaultStyles.text, styles.textInput]}
        {...otherProps}
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
    padding: 10,
    width: "100%",
  },
  icon: {
    marginRight: 10,
  },
  textInput: {
    width: "100%",
  },
});

export default AppTextInput;

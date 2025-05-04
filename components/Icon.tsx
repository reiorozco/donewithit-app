import React from "react";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface Props {
  backgroundColor?: string;
  iconColor?: string;
  name: keyof typeof MaterialCommunityIcons.glyphMap;
  size?: number;
}

function Icon({
  backgroundColor = "#000",
  iconColor = "#fff",
  name,
  size = 40,
}: Props) {
  return (
    <View
      style={{
        alignItems: "center",
        backgroundColor,
        borderRadius: size / 2,
        height: size,
        justifyContent: "center",
        width: size,
      }}
    >
      <MaterialCommunityIcons color={iconColor} name={name} size={size * 0.5} />
    </View>
  );
}

export default Icon;

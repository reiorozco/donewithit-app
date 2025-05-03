import React from "react";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface Props {
  name: keyof typeof MaterialCommunityIcons.glyphMap;
  backgroundColor?: string;
  iconColor?: string;
  size?: number;
}

function Icon({
  name,
  size = 40,
  backgroundColor = "#000",
  iconColor = "#fff",
}: Props) {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MaterialCommunityIcons name={name} color={iconColor} size={size * 0.5} />
    </View>
  );
}

export default Icon;

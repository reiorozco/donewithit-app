import React from "react";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface Props {
  name: "email";
  backgroundColor?: string;
  iconColor?: string;
  size?: number;
}

function Icon({
  iconColor = "#fff",
  backgroundColor = "#000",
  size = 40,
  name,
}: Props) {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <MaterialCommunityIcons name={name} color={iconColor} size={size * 0.5} />
    </View>
  );
}

export default Icon;

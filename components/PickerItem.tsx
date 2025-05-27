import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import AppText from "@/components/AppText";
import { IconProps } from "@/components/Icon";

export interface Item extends IconProps {
  label: string;
  value: string | number;
}

export interface PickerItemProps {
  item: Item;
  onPress?: () => void;
}

function PickerItem({ item, onPress }: PickerItemProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={styles.text}>{item.label}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 20,
  },
});

export default PickerItem;

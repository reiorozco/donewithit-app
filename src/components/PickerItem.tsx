import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import AppText from "./AppText";

import Item from "../interfaces/item";

interface Props {
  item: Item;
  onPress?: () => void;
}

function PickerItem({ onPress, item }: Props) {
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

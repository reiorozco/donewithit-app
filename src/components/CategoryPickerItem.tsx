import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import AppText from "./AppText";
import Icon from "./Icon";

import Item from "../interfaces/item";

interface Props {
  item: Item;
  onPress?: () => void;
}

function CategoryPickerItem({ onPress, item }: Props) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Icon backgroundColor={item.backgroundColor} name={item.name} size={80} />

      <AppText style={styles.label}>{item.label}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingHorizontal: 30,
    paddingVertical: 15,
    width: "33%",
  },
  label: {
    marginTop: 5,
    textAlign: "center",
  },
});

export default CategoryPickerItem;

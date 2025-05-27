import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import { PickerItemProps } from "@/components/PickerItem";
import Icon from "@/components/Icon";

type Props = PickerItemProps;

function CategoryPickerItem({ item, onPress }: Props) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Icon backgroundColor={item.backgroundColor} name={item.name} size={80} />

      <Text style={styles.label}>{item.label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
    width: "33%",
  },
  label: {
    marginTop: 10,
    textAlign: "center",
  },
});

export default CategoryPickerItem;

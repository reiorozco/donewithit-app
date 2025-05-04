import React, { useState } from "react";
import {
  FlatList,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppButton from "@/components/AppButton";
import AppText from "@/components/AppText";
import PickerItem from "@/components/PickerItem";
import Screen from "@/components/Screen";
import colors from "@/constants/colors";

export type Item = {
  value: string;
  label: string;
};

export interface AppPickerProps {
  items: Item[];
  onSelectItem?: (item: Item) => void;
  selectedItem?: Item;
  icon?: keyof typeof MaterialCommunityIcons.glyphMap;
  placeholder?: string;
}

function AppPicker({
  icon,
  items,
  onSelectItem,
  placeholder,
  selectedItem,
}: AppPickerProps) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={colors.medium}
              style={styles.icon}
            />
          )}

          {selectedItem ? (
            <AppText style={styles.text}>{selectedItem.label}</AppText>
          ) : (
            <AppText style={[styles.text, styles.placeholderText]}>
              {placeholder}
            </AppText>
          )}

          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>

      <Modal visible={modalVisible} animationType="slide">
        <Screen style={styles.modalContainer}>
          <AppButton title="Close" onPress={() => setModalVisible(false)} />

          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItem
                label={item.label}
                onPress={() => {
                  setModalVisible(false);
                  if (onSelectItem) {
                    onSelectItem(item);
                  }
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    marginVertical: 10,
    padding: 20,
    width: "100%",
  },
  icon: {
    marginRight: 10,
  },
  modalContainer: {
    padding: 5,
  },
  placeholderText: {
    color: colors.medium,
  },
  text: {
    flex: 1,
  },
});

export default AppPicker;

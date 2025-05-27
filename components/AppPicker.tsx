import React, { ReactElement, useState } from "react";
import {
  DimensionValue,
  FlatList,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppButton from "@/components/AppButton";
import AppText from "@/components/AppText";
import PickerItem, { Item, PickerItemProps } from "@/components/PickerItem";
import Screen from "@/components/Screen";
import colors from "@/constants/colors";

export interface AppPickerProps {
  icon?: keyof typeof MaterialCommunityIcons.glyphMap;
  items: Item[];
  numColumns?: number;
  onSelectItem?: (item: Item) => void;
  PickerItemComponent?: ({ item, onPress }: PickerItemProps) => ReactElement;
  placeholder?: string;
  selectedItem?: Item;
  width?: DimensionValue;
}

function AppPicker({
  icon,
  items,
  numColumns = 1,
  onSelectItem,
  PickerItemComponent = PickerItem,
  placeholder,
  selectedItem,
  width = "100%",
}: AppPickerProps) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.container, { width: width }]}>
          {icon && (
            <MaterialCommunityIcons
              color={colors.medium}
              name={icon}
              size={20}
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
            color={colors.medium}
            name="chevron-down"
            size={20}
          />
        </View>
      </TouchableWithoutFeedback>

      <Modal animationType="slide" transparent visible={modalVisible}>
        <Screen style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <AppButton onPress={() => setModalVisible(false)} title="Close" />

            <FlatList
              data={items}
              keyExtractor={(item) => item.value.toString()}
              numColumns={numColumns}
              renderItem={({ item }) => (
                <PickerItemComponent
                  item={item}
                  onPress={() => {
                    setModalVisible(false);
                    if (onSelectItem) {
                      onSelectItem(item);
                    }
                  }}
                />
              )}
            />
          </View>
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
    // width: "100%",
  },
  icon: {
    marginRight: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 5,
  },
  modalContent: {
    backgroundColor: colors.white,
    borderColor: colors.light,
    borderStyle: "solid",
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    borderWidth: 1,
    elevation: 5,
    shadowColor: "black",
    shadowOffset: {
      height: -10,
      width: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    // height: 600,
    padding: 10,
  },
  placeholderText: {
    color: colors.medium,
  },
  text: {
    flex: 1,
  },
});

export default AppPicker;

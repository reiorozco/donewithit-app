import { useState } from "react";
import { StyleSheet } from "react-native";

import Screen from "./app/components/Screen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";

import Item from "./app/interfaces/Item";
import colors from "./app/config/colors";

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
];

export default function App() {
  const [category, setCategory] = useState<Item>(categories[0]);

  return (
    <Screen style={styles.screen}>
      <AppPicker
        placeholder="Applications"
        icon="apps"
        items={categories}
        selectedItem={category}
        onSelectItem={(item) => setCategory(item)}
      />

      <AppTextInput icon="email" placeholder="Enter email" />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    // alignItems: "center",
    // justifyContent: "center",
    // backgroundColor: "white",
    // flex: 1,
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },

  screen: {
    backgroundColor: colors.light,
    padding: 20,
  },
});

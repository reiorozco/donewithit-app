import { StyleSheet } from "react-native";

import Screen from "./app/components/Screen";
import AppTextInput from "./app/components/AppTextInput";

import colors from "./app/config/colors";

export default function App() {
  return (
    <Screen style={styles.screen}>
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

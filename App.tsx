import { StyleSheet } from "react-native";

import Screen from "./app/components/Screen";
import ListingEditScreen from "./app/screens/ListingEditScreen";

import colors from "./app/config/colors";

export default function App() {
  return (
      <ListingEditScreen />
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

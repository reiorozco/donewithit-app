import { SafeAreaView, StyleSheet, Text } from "react-native";

import colors from "./config/colors";

export default function App() {
  return (
    <SafeAreaView>
      <Text>Home Screen</Text>
    </SafeAreaView>
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

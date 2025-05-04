import { GestureHandlerRootView } from "react-native-gesture-handler";
import Screen from "@/components/Screen";
import { StyleSheet } from "react-native";

import ListingEditScreen from "@/screens/ListingEditScreen";

export default function Index() {
  return (
    <GestureHandlerRootView>
      <Screen style={styles.container}>
        <ListingEditScreen />
      </Screen>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 0,
  },
});

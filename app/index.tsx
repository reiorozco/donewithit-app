import { GestureHandlerRootView } from "react-native-gesture-handler";
import Screen from "@/components/Screen";
import { StyleSheet } from "react-native";
import MessagesScreen from "@/screens/MessagesScreen";

export default function Index() {
  return (
    <GestureHandlerRootView>
      <Screen style={styles.container}>
        <MessagesScreen />
      </Screen>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 0,
  },
});

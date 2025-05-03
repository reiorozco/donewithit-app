import { GestureHandlerRootView } from "react-native-gesture-handler";
import LoginScreen from "@/screens/LoginScreen";
import Screen from "@/components/Screen";
import { StyleSheet } from "react-native";

export default function Index() {
  return (
    <GestureHandlerRootView>
      <Screen style={styles.container}>
        <LoginScreen />
      </Screen>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 0,
  },
});

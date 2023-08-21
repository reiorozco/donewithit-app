import { Button, StyleSheet, Text } from "react-native";
import { Stack } from "expo-router/stack";
import { useRouter } from "expo-router";

import Screen from "./components/Screen";

import colors from "./config/colors";

export default function App() {
  const router = useRouter();

  return (
    <Screen>
      <Stack.Screen options={{ title: "Tweets" }} />

      <Text>Tweets</Text>

      <Button
        title="View Tweet"
        onPress={() => {
          router.push({
            pathname: "details",
            params: { name: "Press fix title" },
          });
        }}
      />

      {/*<Link href="/details">View tweet</Link>*/}
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

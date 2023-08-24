import { Stack } from "expo-router/stack";

import colors from "../../../src/config/colors";

export default function Layout() {
  return (
    <Stack screenOptions={{ contentStyle: { backgroundColor: colors.light } }}>
      <Stack.Screen name="index" options={{ title: "Account" }} />

      <Stack.Screen name="messages" options={{ title: "Messages" }} />
    </Stack>
  );
}

import { Stack } from "expo-router/stack";
import { ThemeProvider } from "@react-navigation/native";

import navigationTheme from "../src/config/navigationTheme";

export default function Layout() {
  return (
    <ThemeProvider value={navigationTheme}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />

        <Stack.Screen name="login" options={{ title: "Login" }} />

        <Stack.Screen name="register" options={{ title: "Register" }} />

        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  );
}

import { useState } from "react";
import { Stack } from "expo-router/stack";
import { ThemeProvider } from "@react-navigation/native";

import OfflineNotice from "../src/components/OfflineNotice";
import navigationTheme from "../src/config/navigationTheme";
import AuthContext, { User } from "../src/auth/context";

export default function Layout() {
  const [user, setUser] = useState<User | null>(null);

  return (
    <ThemeProvider value={navigationTheme}>
      <AuthContext.Provider value={{ user, setUser }}>
        <OfflineNotice />

        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />

          <Stack.Screen name="login" options={{ title: "Login" }} />

          <Stack.Screen name="register" options={{ title: "Register" }} />

          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </AuthContext.Provider>
    </ThemeProvider>
  );
}

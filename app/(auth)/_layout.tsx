import React from "react";
import { Text } from "react-native";
import { Redirect, Stack } from "expo-router";

import { useSession } from "@/context/AuthContext";
import colors from "@/constants/colors";

export default function AuthLayout() {
  const { isLoading, session } = useSession();

  // You can keep the splash screen open or render a loading screen like we do here.
  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  // Only require authentication within the (app) group's layout as users
  // need to be able to access the (auth) group and sign in again.
  if (session) {
    // On web, static rendering will stop here as the user is not authenticated
    // in the headless Node process that the pages are rendered in.
    return <Redirect href="/(app)/(tabs)" />;
  }

  return (
    <Stack
      screenOptions={{
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen name="welcome" options={{ headerShown: false }} />

      <Stack.Screen
        name="login"
        options={{
          headerTitleStyle: { color: colors.primary, fontWeight: "bold" },
          title: "Login",
        }}
      />

      <Stack.Screen
        name="register"
        options={{
          headerTitleStyle: { color: colors.secondary, fontWeight: "bold" },
          title: "Register",
        }}
      />
    </Stack>
  );
}

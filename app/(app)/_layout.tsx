import React from "react";
import { Redirect, Stack } from "expo-router";
import { Text } from "react-native";
import { StatusBar } from "expo-status-bar";

import { useSession } from "@/context/AuthContext";

export default function RootLayout() {
  const { isLoading, session } = useSession();

  // You can keep the splash screen open or render a loading screen like we do here.
  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  // Only require authentication within the (app) group's layout as users
  // need to be able to access the (auth) group and sign in again.
  if (!session) {
    // On web, static rendering will stop here as the user is not authenticated
    // in the headless Node process that the pages are rendered in.
    return <Redirect href="/sign-in" />;
  }

  return (
    <>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>

      <StatusBar style="dark" />
    </>
  );
}

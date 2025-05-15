import React from "react";
import { Redirect, Stack } from "expo-router";

import { useSession } from "@/context/AuthContext";
import AppActivityIndicator from "@/components/AppActivityIndicator";
import colors from "@/constants/colors";
import routes from "@/constants/routes";

export default function AuthLayout() {
  const { isUserLoading: isLoading, user } = useSession();

  // You can keep the splash screen open or render a loading screen like we do here.
  if (isLoading) {
    return <AppActivityIndicator />;
  }

  // Only require authentication within the (app) group's layout as users
  // need to be able to access the (auth) group and sign in again.
  if (user) {
    // On web, static rendering will stop here as the user is not authenticated
    // in the headless Node process that the pages are rendered in.
    return <Redirect href={routes.HOME} />;
  }

  return (
    <Stack
      screenOptions={{
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="welcome"
        options={{ headerShown: false, title: "Welcome" }}
      />

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

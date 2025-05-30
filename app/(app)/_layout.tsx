import React from "react";
import { Redirect, Slot } from "expo-router";

import { useSession } from "@/context/AuthContext";
import AppActivityIndicator from "@/components/AppActivityIndicator";
import routes from "@/constants/routes";

export default function RootLayout() {
  const { isUserLoading: isLoading, user } = useSession();

  // You can keep the splash screen open or render a loading screen like we do here.
  if (isLoading) {
    return <AppActivityIndicator />;
  }

  // Only require authentication within the (app) group's layout as users
  // need to be able to access the (auth) group and sign in again.
  if (!user) {
    // On web, static rendering will stop here as the user is not authenticated
    // in the headless Node process that the pages are rendered in.
    return <Redirect href={routes.WELCOME} />;
  }

  return <Slot />;
}

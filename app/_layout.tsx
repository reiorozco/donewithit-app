import React from "react";
import { StatusBar } from "expo-status-bar";
import { Slot } from "expo-router";

import { SessionProvider } from "@/context/AuthContext";
import Screen from "@/components/Screen";

export default function Root() {
  return (
    <SessionProvider>
      <Screen>
        <Slot />
      </Screen>

      <StatusBar style="dark" />
    </SessionProvider>
  );
}

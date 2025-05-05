import React from "react";
import { StatusBar } from "expo-status-bar";
import { Slot } from "expo-router";

import { SessionProvider } from "@/context/AuthContext";

export default function Root() {
  return (
    <SessionProvider>
      <Slot />

      <StatusBar style="dark" />
    </SessionProvider>
  );
}

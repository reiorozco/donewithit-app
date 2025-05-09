import React from "react";
import { StatusBar } from "expo-status-bar";
import { Slot } from "expo-router";

import { SessionProvider } from "@/context/AuthContext";
import QueryClientProvider from "@/context/QueryClientProvider";
import Screen from "@/components/Screen";

export default function Root() {
  return (
    <QueryClientProvider>
      <SessionProvider>
        <Screen>
          <Slot />
        </Screen>

        <StatusBar style="auto" />
      </SessionProvider>
    </QueryClientProvider>
  );
}

import React from "react";
import { StatusBar } from "expo-status-bar";
import { Slot } from "expo-router";

import { SessionProvider } from "@/context/AuthContext";
import QueryClientProvider from "@/context/QueryClientProvider";
import OfflineNotice from "@/components/OfflineNotice";

export default function Root() {
  return (
    <QueryClientProvider>
      <SessionProvider>
        <OfflineNotice />

        <Slot />

        <StatusBar style="auto" />
      </SessionProvider>
    </QueryClientProvider>
  );
}

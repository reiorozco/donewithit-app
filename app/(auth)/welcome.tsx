import React from "react";

import Screen from "@/components/Screen";
import WelcomeScreen from "@/screens/WelcomeScreen";

export default function Welcome() {
  return (
    <Screen style={{ paddingTop: 0 }}>
      <WelcomeScreen />
    </Screen>
  );
}

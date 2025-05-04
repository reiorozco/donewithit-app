import { GestureHandlerRootView } from "react-native-gesture-handler";

import Screen from "@/components/Screen";
import AccountScreen from "@/screens/AccountScreen";

export default function Index() {
  return (
    <GestureHandlerRootView>
      <Screen>
        <AccountScreen />
      </Screen>
    </GestureHandlerRootView>
  );
}

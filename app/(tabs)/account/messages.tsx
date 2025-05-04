import { GestureHandlerRootView } from "react-native-gesture-handler";

import Screen from "@/components/Screen";
import MessagesScreen from "@/screens/MessagesScreen";

export default function MessagesStack() {
  return (
    <GestureHandlerRootView>
      <Screen>
        <MessagesScreen />
      </Screen>
    </GestureHandlerRootView>
  );
}

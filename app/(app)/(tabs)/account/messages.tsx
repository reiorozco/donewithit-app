import { GestureHandlerRootView } from "react-native-gesture-handler";

import MessagesScreen from "@/screens/MessagesScreen";

export default function MessagesStack() {
  return (
    <GestureHandlerRootView>
      <MessagesScreen />
    </GestureHandlerRootView>
  );
}

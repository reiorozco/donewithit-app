import { GestureHandlerRootView } from "react-native-gesture-handler";

import Screen from "@/components/Screen";
import ListingsScreen from "@/screens/ListingsScreen";

export default function Index() {
  return (
    <GestureHandlerRootView>
      <Screen>
        <ListingsScreen />
      </Screen>
    </GestureHandlerRootView>
  );
}

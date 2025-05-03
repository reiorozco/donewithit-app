import { GestureHandlerRootView } from "react-native-gesture-handler";
import ListingsScreen from "@/screens/ListingsScreen";

export default function Index() {
  return (
    <GestureHandlerRootView>
      <ListingsScreen />
    </GestureHandlerRootView>
  );
}

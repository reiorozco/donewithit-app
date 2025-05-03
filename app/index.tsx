import { GestureHandlerRootView } from "react-native-gesture-handler";

import ListingDetailsScreen from "@/screens/ListingDetailsScreen";
import AccountScreen from "@/screens/AccountScreen";

export default function Index() {
  return (
    <GestureHandlerRootView>
      <AccountScreen />
    </GestureHandlerRootView>
  );
}

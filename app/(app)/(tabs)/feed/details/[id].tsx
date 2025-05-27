import { GestureHandlerRootView } from "react-native-gesture-handler";

import ListingDetailsScreen from "@/screens/ListingDetailsScreen";

export default function Index() {
  return (
    <GestureHandlerRootView>
      <ListingDetailsScreen />
    </GestureHandlerRootView>
  );
}

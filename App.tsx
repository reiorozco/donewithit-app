import { StatusBar as StatusBarExpo } from "expo-status-bar";
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/*<WelcomeScreen />*/}
      <ViewImageScreen />

      {/*<View*/}
      {/*  style={{*/}
      {/*    backgroundColor: "#f8f4f4",*/}
      {/*    padding: 20,*/}
      {/*    paddingTop: 100,*/}
      {/*  }}*/}
      {/*>*/}
      {/*  <Card*/}
      {/*    title="Red Jacket for sale"*/}
      {/*    subTitle="$100"*/}
      {/*    image={require("./app/assets/jacket.jpg")}*/}
      {/*  />*/}
      {/*</View>*/}

      {/*<ListingDetailsScreen />*/}

      <StatusBarExpo style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // alignItems: "center",
    // justifyContent: "center",
    backgroundColor: "white",
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

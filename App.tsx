import { StyleSheet } from "react-native";

import Screen from "./app/components/Screen";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";

import colors from "./app/config/colors";

export default function App() {
  return (
    <Screen style={styles.screen}>
      {/*<WelcomeScreen />*/}
      {/*<ViewImageScreen />*/}

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

      {/*<MessagesScreen />*/}

      <AccountScreen />

      <ListingsScreen />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    // alignItems: "center",
    // justifyContent: "center",
    // backgroundColor: "white",
    // flex: 1,
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },

  screen: {
    backgroundColor: colors.light,
    padding: 20,
  },
});

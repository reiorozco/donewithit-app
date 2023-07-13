import { StyleSheet, View } from "react-native";

import MessagesScreen from "./app/screens/MessagesScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";

import colors from "./app/config/colors";

export default function App() {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
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
      </View>
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
  },
});

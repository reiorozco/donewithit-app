import { StyleSheet, View } from "react-native";

import MessagesScreen from "./app/screens/MessagesScreen";
import Screen from "./app/components/Screen";

export default function App() {
  return (
    <Screen>
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

        <MessagesScreen />
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
});

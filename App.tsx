import { StyleSheet, View } from "react-native";

import MessagesScreen from "./app/screens/MessagesScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";

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

        {/*<MessagesScreen />*/}

        <ListItem
          subTitle="My subtitle"
          ImageComponent={<Icon name="email" />}
          title="My title"
        />
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

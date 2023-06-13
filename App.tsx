import { StatusBar as StatusBarExpo } from "expo-status-bar";
import {
  Alert,
  Button,
  Image,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  StatusBar,
} from "react-native";

export default function App() {
  const handlePress = () => console.log("Text pressed");

  const createButtonAlert = () =>
    Alert.alert("Alert Title", "My Alert Msg", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);

  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>
        Open up App.tsx to start working on your app!
      </Text>

      {/* // Local Images */}
      {/*<Image source={require("./assets/icon.png")} />*/}

      {/* // Network Images */}
      <Text numberOfLines={1} onPress={handlePress}>
        Images and Touchables
      </Text>
      <TouchableOpacity onPress={handlePress}>
        <Image
          source={{
            uri: "https://picsum.photos/200/300",
          }}
          style={{ width: 200, height: 300 }}
          blurRadius={5}
        />
      </TouchableOpacity>

      <Text numberOfLines={1} onPress={handlePress}>
        Buttons
      </Text>
      <Button title="Click Me" onPress={handlePress} color="orange" />

      <Button
        title="Alert function"
        onPress={() => alert("This is an alert.")}
        color="red"
      />

      <Button title="Button Alert" onPress={createButtonAlert} />

      <StatusBarExpo style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    // justifyContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

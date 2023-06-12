import { StatusBar } from "expo-status-bar";
import { Image, SafeAreaView, StyleSheet, Text } from "react-native";

export default function App() {
  const handlePress = () => console.log("Text pressed");

  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>
        Open up App.tsx to start working on your app!
      </Text>

      {/* // Local Images */}
      {/*<Image source={require("./assets/icon.png")} />*/}

      {/* // Network Images */}
      <Image
        source={{
          uri: "https://picsum.photos/200/300",
        }}
        style={{ width: 200, height: 300 }}
        blurRadius={5}
      />

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});

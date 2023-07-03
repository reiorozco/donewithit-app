import { StatusBar as StatusBarExpo } from "expo-status-bar";
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  useWindowDimensions,
  Text,
} from "react-native";

export default function App() {
  const { height, width } = useWindowDimensions();
  const isPortrait = height > width;

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: "lightblue",
          width: "100%",
          height: isPortrait ? "30%" : "100%",
        }}
      >
        <Text>div</Text>
      </View>

      <View
        style={{
          backgroundColor: "white",
          flex: 1,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            backgroundColor: "dodgerblue",
            height: 100,
            width: 100,
          }}
        />
        <View
          style={{
            backgroundColor: "gold",
            height: 100,
            width: 100,

            top: 20,
            position: "absolute",
          }}
        />
        <View
          style={{
            backgroundColor: "tomato",
            height: 100,
            width: 100,
          }}
        />
      </View>

      <StatusBarExpo style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    // alignItems: "center",
    // justifyContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

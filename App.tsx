import { useState } from "react";
import { StyleSheet, View } from "react-native";

import colors from "./app/config/colors";
import ImageInput from "./app/components/ImageInput";

export default function App() {
  const [image, setImage] = useState<string | null>(null);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <ImageInput
        imageUri={image}
        onChangeImage={(imageUri) => setImage(imageUri)}
      />
    </View>
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

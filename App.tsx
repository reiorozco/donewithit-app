import { useState } from "react";
import { StyleSheet, View } from "react-native";

import ImageInputList from "./app/components/ImageInputList";

import colors from "./app/config/colors";

export default function App() {
  const [imageUris, setImageUris] = useState<(string | null)[]>([]);

  const handleAddImage = (imageUri: string | null) =>
    setImageUris([...imageUris, imageUri]);

  const handleRemoveImage = (imageUri: string | null) =>
    setImageUris(imageUris.filter((uri) => uri !== imageUri));

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAddImage}
        onRemoveImage={handleRemoveImage}
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

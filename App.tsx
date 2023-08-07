import { useState } from "react";
import { StyleSheet } from "react-native";

import ImageInputList from "./app/components/ImageInputList";
import Screen from "./app/components/Screen";

import colors from "./app/config/colors";

export default function App() {
  const [imageUris, setImageUris] = useState<(string | null)[]>([]);

  const handleAddImage = (imageUri: string | null) =>
    setImageUris([...imageUris, imageUri]);

  const handleRemoveImage = (imageUri: string | null) =>
    setImageUris(imageUris.filter((uri) => uri !== imageUri));

  return (
    <Screen>
      <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAddImage}
        onRemoveImage={handleRemoveImage}
      />
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

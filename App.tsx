import { useEffect, useState } from "react";
import { Button, Image, StyleSheet, View } from "react-native";
import * as ImagePicker from "expo-image-picker";

import colors from "./app/config/colors";
import ImageInput from "./app/components/ImageInput";

export default function App() {
  const [image, setImage] = useState<string | null>(null);

  const requestPermission = async () => {
    const response = await ImagePicker.requestCameraPermissionsAsync();

    console.log(response);

    if (!response.granted) alert("You need to enable permission to access.");
  };

  const pickImage = async () => {
    try {
      // No permissions request is necessary for launching the image library
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      console.log(result);

      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
    } catch (e) {
      console.log("Error reading an image", e);
    }
  };

  useEffect(() => {
    requestPermission().then((r) => console.log(r));
  }, []);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />

      {image && (
        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
      )}

      <ImageInput imageUri={image} />
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

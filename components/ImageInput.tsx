import React from "react";
import {
  Alert,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Image } from "expo-image";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

import colors from "@/constants/colors";

interface Props {
  image?: string | null;
  setImage: (image: string | null) => void;
}

function ImageInput({ image, setImage }: Props) {
  const handlePress = () => {
    if (!image) {
      void pickImage();
    } else {
      Alert.alert(
        "Delete Image",
        "Are you sure you want to delete this image?",
        [
          {
            onPress: () => setImage(null),
            style: "destructive",
            text: "Yes",
          },
          {
            style: "cancel",
            text: "Cancel",
          },
        ],
      );
    }
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [4, 3],
        mediaTypes: ["images", "videos"],
        quality: 0.5,
      });

      console.log(result);

      if (!result.canceled) {
        setImage(result.assets[0].uri);
      } else {
        Alert.alert("Selection canceled", "You have not selected any images.");
      }
    } catch (error) {
      console.error("Error selecting image:", error);
      Alert.alert("Error", "A problem occurred while selecting the image.");
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {image ? (
          <Image source={{ uri: image }} style={styles.image} />
        ) : (
          <MaterialCommunityIcons name="camera" size={35} />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.light,
    borderRadius: 15,
    height: 100,
    justifyContent: "center",
    overflow: "hidden",
    width: 100,
  },
  image: {
    height: 100,
    width: 100,
  },
});

export default ImageInput;

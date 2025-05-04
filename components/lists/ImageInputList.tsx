import React, { useRef } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import ImageInput from "@/components/ImageInput";

interface Props {
  images: (string | null)[];
  onAddImage: (image: string | null) => void;
  onRemoveImage: (image: string | null) => void;
}

function ImageInputList({ images, onAddImage, onRemoveImage }: Props) {
  const scrollViewRef = useRef<ScrollView>(null);

  return (
    <View>
      <ScrollView
        horizontal
        onContentSizeChange={() =>
          scrollViewRef.current?.scrollToEnd({ animated: true })
        }
        ref={scrollViewRef}
      >
        <View style={styles.container}>
          {images.map((image) => (
            <ImageInput
              image={image}
              key={image}
              setImage={() => onRemoveImage(image)}
            />
          ))}

          <ImageInput setImage={onAddImage} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    columnGap: 10,
    flexDirection: "row",
    paddingVertical: 10,
    width: "100%",
  },
});

export default ImageInputList;

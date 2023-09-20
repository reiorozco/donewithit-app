import React from "react";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import { Image } from "expo-image";

import AppText from "./AppText";

import colors from "../config/colors";

interface Props {
  imageUrl: string;
  subTitle: string;
  title: string;
  thumbnailUrl?: string;
  onPress?: () => void;
}

function Card({ subTitle, title, imageUrl, onPress, thumbnailUrl }: Props) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image
          style={styles.image}
          source={{ uri: imageUrl }}
          placeholder={{ uri: thumbnailUrl }}
        />

        <View style={styles.detailsContainer}>
          <AppText style={styles.title} numberOfLines={1}>
            {title}
          </AppText>

          <AppText style={styles.subTitle} numberOfLines={2}>
            {subTitle}
          </AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 15,
    marginBottom: 20,
    overflow: "hidden",
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    height: 200,
    width: "100%",
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
  title: {
    marginBottom: 7,
  },
});

export default Card;

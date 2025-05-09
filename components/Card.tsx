import React from "react";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import { Image, ImageSource } from "expo-image";

import AppText from "@/components/AppText";
import colors from "@/constants/colors";

interface Props {
  image: string | ImageSource;
  onPress?: () => void;
  subTitle: string;
  title: string;
}

function Card({ image, onPress, subTitle, title }: Props) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image source={image} style={styles.image} />

        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subTitle}>{subTitle}</AppText>
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

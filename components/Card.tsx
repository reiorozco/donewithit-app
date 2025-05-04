import React from "react";
import { View, StyleSheet } from "react-native";
import { Image } from "expo-image";

import AppText from "@/components/AppText";
import colors from "@/constants/colors";

interface Props {
  image: string;
  subTitle: string;
  title: string;
}

function Card({ image, subTitle, title }: Props) {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />

      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
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

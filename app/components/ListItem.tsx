import React from "react";
import { Image, StyleSheet, View } from "react-native";

import AppText from "./AppText";
import colors from "../config/colors";

interface Props {
  title: string;
  image: any;
  subTitle: string;
}

function ListItem({ subTitle, title, image }: Props) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />

      <View>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    borderRadius: 35,
    height: 70,
    marginRight: 10,
    width: 70,
  },
  subTitle: {
    color: colors.medium,
  },
  title: {
    fontWeight: "500",
  },
});

export default ListItem;

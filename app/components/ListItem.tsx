import React, { ReactNode } from "react";
import { Image, StyleSheet, TouchableHighlight, View } from "react-native";
import { Swipeable } from "react-native-gesture-handler";

import AppText from "./AppText";

import colors from "../config/colors";

interface Props {
  description: string;
  image: any;
  title: string;
  onPress?: () => void;
  renderRightActions?: () => ReactNode;
  renderLeftActions?: () => ReactNode;
}

function ListItem({
  description,
  title,
  image,
  onPress,
  renderRightActions,
  renderLeftActions,
}: Props) {
  return (
    <Swipeable
      renderRightActions={renderRightActions}
      renderLeftActions={renderLeftActions}
    >
      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor={colors.light}
        onPress={onPress}
      >
        <View style={styles.container}>
          <Image style={styles.image} source={image} />

          <View>
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.subTitle}>{description}</AppText>
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
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

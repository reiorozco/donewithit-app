import React, { ReactNode } from "react";
import { Image, StyleSheet, TouchableHighlight, View } from "react-native";
import { Swipeable } from "react-native-gesture-handler";

import AppText from "./AppText";

import colors from "../config/colors";

interface Props {
  subTitle: string;
  title: string;
  ImageComponent?: ReactNode;
  onPress?: () => void;
  renderLeftActions?: () => ReactNode;
  renderRightActions?: () => ReactNode;
}

function ListItem({
  ImageComponent,
  onPress,
  renderLeftActions,
  renderRightActions,
  subTitle,
  title,
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
          {ImageComponent}

          <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{title}</AppText>
            {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
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
  detailsContainer: {
    marginLeft: 10,
    justifyContent: "center",
  },
  image: {
    borderRadius: 35,
    height: 70,
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

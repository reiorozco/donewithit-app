import React, { ReactNode } from "react";
import { Image, StyleSheet, TouchableHighlight, View } from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "../AppText";

import colors from "../../config/colors";

interface Props {
  title: string;
  subTitle?: string;
  image?: any;
  IconComponent?: ReactNode;
  onPress?: () => void;
  renderLeftActions?: () => ReactNode;
  renderRightActions?: () => ReactNode;
}

function ListItem({
  IconComponent,
  image,
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
          {image && <Image style={styles.image} source={image} />}

          {IconComponent}

          <View style={styles.detailsContainer}>
            <AppText style={styles.title} numberOfLines={1}>
              {title}
            </AppText>

            {subTitle && (
              <AppText style={styles.subTitle} numberOfLines={2}>
                {subTitle}
              </AppText>
            )}
          </View>

          <MaterialCommunityIcons
            name="chevron-right"
            size={25}
            color={colors.medium}
          />
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.white,
    flexDirection: "row",
    padding: 10,
  },
  detailsContainer: {
    flex: 1,
    justifyContent: "center",
    marginLeft: 10,
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

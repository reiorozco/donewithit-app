import React, { ReactNode } from "react";
import { StyleSheet, TouchableHighlight, View } from "react-native";
import { Image } from "expo-image";
import Swipeable from "react-native-gesture-handler/ReanimatedSwipeable";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import AppText from "@/components/AppText";
import colors from "@/constants/colors";

interface Props {
  IconComponent?: ReactNode;
  image?: any;
  onPress?: () => void;
  renderLeftActions?: () => ReactNode;
  renderRightActions?: () => ReactNode;
  subTitle?: string;
  title: string;
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
      renderLeftActions={renderLeftActions}
      renderRightActions={renderRightActions}
    >
      <TouchableHighlight onPress={onPress} underlayColor={colors.light}>
        <View style={styles.container}>
          {IconComponent}

          {image && <Image source={image} style={styles.image} />}

          <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{title}</AppText>

            {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
          </View>

          <MaterialCommunityIcons
            color={colors.medium}
            name="chevron-right"
            size={25}
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

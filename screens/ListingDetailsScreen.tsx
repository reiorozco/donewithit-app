import React from "react";
import { StyleSheet, View } from "react-native";
import { Image } from "expo-image";

import AppText from "@/components/AppText";
import { ListItem } from "@/components/lists";
import colors from "@/constants/colors";

const avatarSource = require("@/assets/images/avatar.jpg");
const imageSource = require("@/assets/images/jacket.jpg");

function ListingDetailsScreen() {
  return (
    <View>
      <Image source={imageSource} style={styles.image} />

      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Brown jacket for sale</AppText>
        <AppText style={styles.price}>$100</AppText>

        <View style={styles.userContainer}>
          <ListItem
            image={avatarSource}
            subTitle="5 Listings"
            title="Rei Orozco"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    height: 300,
    width: "100%",
  },
  price: {
    color: colors.secondary,
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 20,
  },
});

export default ListingDetailsScreen;

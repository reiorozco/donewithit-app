import React from "react";
import { StyleSheet, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Image } from "expo-image";

import AppText from "../components/AppText";
import ListItem from "../components/lists/ListItem";

import colors from "../config/colors";

function ListingDetailsScreen() {
  const { title, price, imageUrl, thumbnailUrl } = useLocalSearchParams();

  return (
    <View>
      <Image
        style={styles.image}
        source={{ uri: imageUrl as string }}
        placeholder={{ uri: thumbnailUrl as string }}
      />

      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>

        <AppText style={styles.price}>${price}</AppText>

        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/avatar.jpg")}
            title="Rei Orozco"
            subTitle="5 Listings"
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

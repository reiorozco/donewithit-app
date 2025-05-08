import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { useLocalSearchParams } from "expo-router";

import AppText from "@/components/AppText";
import { ListItem } from "@/components/lists";
import colors from "@/constants/colors";

const avatarSource = require("@/assets/images/avatar.jpg");

const listings = [
  {
    id: 1,
    image: require("../assets/images/jacket.jpg"),
    price: 100,
    title: "Red jacket for sale",
  },
  {
    id: 2,
    image: require("../assets/images/couch.jpg"),
    price: 1000,
    title: "Couch in great condition",
  },
];

function ListingDetailsScreen() {
  const { id } = useLocalSearchParams();

  const item = listings.find((l) => l.id.toString() === id); // Simula fetch

  if (!item) return <Text>Item not found</Text>;

  return (
    <View>
      <Image source={item.image} style={styles.image} />

      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{item.title}</AppText>
        <AppText style={styles.price}>${item.price}</AppText>

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

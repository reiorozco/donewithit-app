import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { Href, useRouter } from "expo-router";

import Screen from "@/components/Screen";
import Card from "@/components/Card";
import colors from "@/constants/colors";

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

function ListingsScreen() {
  const router = useRouter();

  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            image={item.image}
            onPress={() =>
              router.push(`/feed/details/${item.id.toString()}` as Href)
            }
            subTitle={"$" + item.price}
            title={item.title}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
    padding: 10,
    paddingTop: 10,
  },
});

export default ListingsScreen;

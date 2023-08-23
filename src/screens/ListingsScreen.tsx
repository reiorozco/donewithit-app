import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

import Card from "../components/Card";
import Screen from "../components/Screen";

import colors from "../config/colors";

const listings = [
  {
    id: 1,
    title: "Red jacket for sale",
    price: 100,
    image: require("../assets/jacket.jpg"),
  },

  {
    id: 2,
    title: "Couch in great condition",
    price: 9999,
    image: require("../assets/couch.jpg"),
  },
];

function ListingsScreen() {
  const router = useRouter();

  return (
    <Screen>
      <FlatList
        data={listings}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
            onPress={() =>
              router.push({
                pathname: "(tabs)/(feed)/listingDetails",
                params: item,
              })
            }
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;

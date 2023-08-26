import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

import Listing from "../interfaces/listing";
import listingsApi from "../api/listings";

import Card from "../components/Card";
import Screen from "../components/Screen";

import colors from "../config/colors";
import routes from "./routes";

function ListingsScreen() {
  const router = useRouter();

  const [listings, setListings] = useState<Listing[]>([]);

  const loadListings = async () => {
    const response = await listingsApi.getListings();

    if (response.data) setListings(response.data);
  };

  useEffect(() => {
    loadListings();
  }, []);

  return (
    <Screen>
      <FlatList
        data={listings}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            imageUrl={item.images[0].url}
            onPress={() =>
              router.push({
                pathname: routes.LISTING_DETAILS,
                params: {
                  title: item.title,
                  price: item.price,
                  imageUrl: item.images[0].url,
                },
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

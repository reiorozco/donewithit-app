import React, { useEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { useRouter } from "expo-router";

import Listing from "../interfaces/listing";
import listingsApi from "../api/listings";
import useApi from "../hooks/useApi";

import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import AppActivityIndicator from "../components/AppActivityIndicator";
import Card from "../components/Card";
import Screen from "../components/Screen";

import routes from "./routes";

function ListingsScreen() {
  const router = useRouter();
  const {
    request: loadListings,
    loading,
    data: listings,
    error,
  } = useApi<Listing[]>(listingsApi.getListings);

  useEffect(() => {
    loadListings();
  }, []);

  return (
    <Screen style={styles.screen}>
      {error && (
        <View>
          <AppText>Couldn't retrieve the listings</AppText>

          <AppButton title="Retry" onPress={loadListings} />
        </View>
      )}

      <AppActivityIndicator visible={loading} />

      <FlatList
        data={listings}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            imageUrl={item.images[0].url}
            thumbnailUrl={item.images[0].thumbnailUrl}
            onPress={() =>
              router.push({
                pathname: routes.LISTING_DETAILS,
                params: {
                  title: item.title,
                  price: item.price,
                  imageUrl: item.images[0].url,
                  thumbnailUrl: item.images[0].thumbnailUrl,
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
    paddingBottom: 0,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});

export default ListingsScreen;

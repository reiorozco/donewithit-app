import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { Href, useRouter } from "expo-router";
import { useQuery } from "@tanstack/react-query";

import listingsApi from "@/api/listings";

import AppActivityIndicator from "@/components/AppActivityIndicator";
import AppButton from "@/components/AppButton";
import AppText from "@/components/AppText";
import Card from "@/components/Card";
import Screen from "@/components/Screen";
import colors from "@/constants/colors";

function ListingsScreen() {
  const router = useRouter();

  const {
    data: listings,
    error,
    isLoading,
    refetch,
  } = useQuery({
    queryFn: async () =>
      await listingsApi.getListings().then((res) => res.data),
    queryKey: ["listings"],
  });

  if (isLoading) return <AppActivityIndicator />;

  if (error)
    return (
      <Screen style={styles.screen}>
        <AppText>{"Couldn't retrieve the listings."}</AppText>
        <AppButton onPress={() => refetch()} title="Retry" />
      </Screen>
    );

  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => {
          return (
            <Card
              image={item.image}
              onPress={() =>
                router.push(`/feed/details/${item.id.toString()}` as Href)
              }
              subTitle={"$" + item.price}
              title={item.title}
            />
          );
        }}
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

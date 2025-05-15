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
import useNetworkStatus from "@/hooks/useNetworkStatus";
import cache from "@/utility/cache";
import colors from "@/constants/colors";

function ListingsScreen() {
  const router = useRouter();
  const { isInternetReachable } = useNetworkStatus();

  const {
    data: listings,
    error,
    isLoading,
    isRefetching,
    refetch,
  } = useQuery({
    queryFn: async () => {
      try {
        const data = await listingsApi.getListings();
        await cache.store("listings", data);

        return data;
      } catch (err) {
        const fallback = await cache.get("listings");

        if (fallback) return fallback;

        throw err;
      }
    },
    queryKey: ["listings"],
    staleTime: 1000 * 60 * 5, // 5 minutos
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
        onRefresh={refetch}
        refreshing={isRefetching}
        renderItem={({ item }) => {
          return (
            <Card
              image={item.images[0].url}
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

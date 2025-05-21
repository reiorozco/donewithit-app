import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Image } from "expo-image";
import { useLocalSearchParams } from "expo-router";
import { useQuery } from "@tanstack/react-query";

import { ListItem } from "@/components/lists";
import AppText from "@/components/AppText";
import ContactSellerForm from "@/components/ContactSellerForm";
import colors from "@/constants/colors";
import listingsApi from "@/api/listings";

const avatarSource = require("@/assets/images/avatar.jpg");

function ListingDetailsScreen() {
  const { id } = useLocalSearchParams();

  const {
    data: item,
    error,
    isLoading,
    isRefetching,
    refetch,
  } = useQuery({
    queryFn: () => listingsApi.getListing(id as string),
    queryKey: ["listing"],
    staleTime: 0,
  });

  if (!item || error) return <Text>Item not found</Text>;

  return (
    <KeyboardAvoidingView
      behavior="position"
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}
      style={{ flex: 1 }}
    >
      <Image source={{ uri: item.images[0].url }} style={styles.image} />

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

        <ContactSellerForm listing={item} />
      </View>
    </KeyboardAvoidingView>
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

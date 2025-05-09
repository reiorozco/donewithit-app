import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";

import listingsApi from "@/api/listings";

import {
  AppFormField,
  AppFormImagePicker,
  AppFormPicker,
} from "@/components/forms";
import AppText from "@/components/AppText";
import AppButton from "@/components/AppButton";
import CategoryPickerItem from "@/components/CategoryPickerItem";
import UploadScreen from "@/screens/UploadScreen";
import { Item } from "@/components/PickerItem";

const schema = z.object({
  category: z.string().nonempty({ message: "Category is a required field" }),
  description: z.string().max(255).optional(),
  images: z
    .array(z.string())
    .min(1, { message: "Please select at least one image" })
    .max(5, { message: "You can only upload up to five images" }),
  price: z
    .string()
    .nonempty({ message: "Price is a required field" })
    .refine((value) => !isNaN(Number(value)), { message: "Invalid price" })
    .refine((value) => value.length <= 6, {
      message: "Price must be less than six characters long",
    }),
  title: z.string().nonempty({ message: "Title is a required field" }),
});

export type ListingData = z.infer<typeof schema>;

const categories: Item[] = [
  {
    backgroundColor: "red",
    label: "Furniture",
    name: "floor-lamp",
    value: "furniture",
  },
  { backgroundColor: "orange", label: "Cars", name: "car", value: "cars" },
  {
    backgroundColor: "gold",
    label: "Cameras",
    name: "camera",
    value: "cameras",
  },
  {
    backgroundColor: "palegreen",
    label: "Games",
    name: "cards",
    value: "games",
  },
  {
    backgroundColor: "mediumaquamarine",
    label: "Clothing",
    name: "shoe-heel",
    value: "clothing",
  },
  {
    backgroundColor: "lightblue",
    label: "Sports",
    name: "basketball",
    value: "sports",
  },
  {
    backgroundColor: "dodgerblue",
    label: "Movies & Music",
    name: "headphones",
    value: "movies",
  },
  {
    backgroundColor: "purple",
    label: "Books",
    name: "book-open-blank-variant",
    value: "books",
  },
  {
    backgroundColor: "gray",
    label: "Other",
    name: "window-maximize",
    value: "other",
  },
];

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

function ListingEditScreen() {
  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const { control, handleSubmit, reset } = useForm<ListingData>({
    defaultValues: {
      category: "",
      description: "",
      images: [],
      price: "",
      title: "",
    },
    mode: "all",
    resolver: zodResolver(schema),
  });
  const { isError, mutate: addListing } = useMutation({
    mutationFn: async (listing: ListingData) => {
      const result = await listingsApi.addListing(listing, (progress) => {
        console.log("Real progress: ", progress);
        // setProgress(progress);
      });

      // Simulate progressive loading
      for (let p = 0; p <= 100; p += 10) {
        await delay(100); // Simulate progress
        console.log("Simulated progress: ", p / 100, "%");
        setProgress(p / 100); // Updating progress bar
      }

      // Real logic of the post
      return result;
    },
    mutationKey: ["addListing"],
    onError: (error) => {
      setUploadVisible(false);
    },
    onSuccess: () => {
      setUploadVisible(false);
      reset();
    },
  });

  const onSubmit = handleSubmit((data) => {
    setUploadVisible(true); // Displays the progress screen
    setProgress(0);

    console.log("Form data: ", data);
    addListing(data);
  });

  return (
    <View style={styles.container}>
      <UploadScreen
        onDone={() => setUploadVisible(false)}
        progress={progress}
        visible={uploadVisible}
      />

      <AppFormImagePicker control={control} name="images" />

      <AppFormField
        control={control}
        maxLength={100}
        name="title"
        placeholder="Title"
      />

      <AppFormField
        control={control}
        keyboardType="numeric"
        maxLength={8}
        name="price"
        placeholder="Price"
        width={120}
      />

      <AppFormPicker
        control={control}
        items={categories}
        name="category"
        numColumns={3}
        PickerItemComponent={CategoryPickerItem}
        placeholder="Category"
        width={240}
      />

      <AppFormField
        control={control}
        maxLength={255}
        multiline
        name="description"
        numberOfLines={3}
        placeholder="Description"
      />

      <View style={styles.submitButton}>
        <AppButton onPress={onSubmit} title="Post" />
      </View>

      {isError && <AppText>Could not save the listing.</AppText>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  submitButton: { marginTop: 10 },
});

export default ListingEditScreen;

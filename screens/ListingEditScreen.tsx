import React from "react";
import { StyleSheet, View } from "react-native";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { AppFormField, AppFormPicker } from "@/components/forms";
import AppButton from "@/components/AppButton";

const schema = z.object({
  title: z.string().nonempty({ message: "This is required" }),
  price: z
    .string()
    .nonempty({ message: "This is required" })
    .refine((value) => !isNaN(Number(value)), { message: "Invalid price" })
    .refine((value) => value.length <= 6, {
      message: "Price must be less than six characters long",
    }),
  description: z.string().max(255).optional(),
  category: z.string().nonempty({ message: "This is required" }),
});

type FormData = z.infer<typeof schema>;

const categories = [
  { label: "Furniture", value: "furniture" },
  { label: "Clothing", value: "clothing" },
  { label: "Camera", value: "camera" },
];

function ListingEditScreen() {
  const { control, handleSubmit } = useForm<FormData>({
    defaultValues: {
      title: "",
      price: "",
      description: "",
      category: "",
    },
    mode: "all",
    resolver: zodResolver(schema),
  });

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <View style={styles.container}>
      <AppFormField
        control={control}
        maxLength={100}
        name="title"
        placeholder="Title"
      />

      <AppFormField
        control={control}
        name="price"
        maxLength={8}
        placeholder="Price"
        keyboardType="numeric"
      />

      <AppFormPicker
        control={control}
        name="category"
        placeholder="Category"
        items={categories}
      />

      <AppFormField
        control={control}
        multiline
        name="description"
        maxLength={255}
        placeholder="Description"
        numberOfLines={3}
      />

      <View style={styles.submitButton}>
        <AppButton title="Post" onPress={onSubmit} />
      </View>
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

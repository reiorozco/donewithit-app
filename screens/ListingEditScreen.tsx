import React from "react";
import { StyleSheet, View } from "react-native";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { AppFormField, AppFormPicker } from "@/components/forms";
import AppButton from "@/components/AppButton";

const schema = z.object({
  category: z.string().nonempty({ message: "This is required" }),
  description: z.string().max(255).optional(),
  price: z
    .string()
    .nonempty({ message: "This is required" })
    .refine((value) => !isNaN(Number(value)), { message: "Invalid price" })
    .refine((value) => value.length <= 6, {
      message: "Price must be less than six characters long",
    }),
  title: z.string().nonempty({ message: "This is required" }),
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
      category: "",
      description: "",
      price: "",
      title: "",
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

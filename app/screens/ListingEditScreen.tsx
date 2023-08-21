import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import Screen from "../components/Screen";
import AppFormPicker from "../components/forms/AppFormPicker";
import CategoryPickerItem from "../components/CategoryPickerItem";
import FormImagePicker from "../components/forms/FormImagePicker";

import FormEditValues from "../interfaces/formEditValues";
import Item from "../interfaces/item";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please select at least one image."),
});

const categories: Item[] = [
  { label: "Furniture", value: 1, name: "floor-lamp", backgroundColor: "red" },
  { label: "Cars", value: 2, name: "car", backgroundColor: "orange" },
  { label: "Cameras", value: 3, name: "camera", backgroundColor: "gold" },
  { label: "Games", value: 4, name: "cards", backgroundColor: "palegreen" },
  {
    label: "Clothing",
    value: 5,
    name: "shoe-heel",
    backgroundColor: "mediumaquamarine",
  },
  {
    label: "Sports",
    value: 6,
    name: "basketball",
    backgroundColor: "lightblue",
  },
  {
    label: "Movies & Music",
    value: 7,
    name: "headphones",
    backgroundColor: "dodgerblue",
  },
  {
    label: "Books",
    value: 8,
    name: "book-open-blank-variant",
    backgroundColor: "purple",
  },
  {
    label: "Other",
    value: 9,
    name: "window-maximize",
    backgroundColor: "gray",
  },
];

type FormValues = FormEditValues;

function ListingEditScreen() {
  return (
    <Screen style={styles.container}>
      <AppForm<FormValues>
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: [],
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <FormImagePicker<FormValues> name="images" />

        <AppFormField<FormValues>
          name="title"
          maxLength={255}
          placeholder="Title"
        />

        <AppFormField<FormValues>
          name="price"
          maxLength={8}
          placeholder="Price"
          keyboardType="numeric"
          width={"25%"}
        />

        <AppFormPicker<FormValues>
          items={categories}
          name="category"
          placeholder="Category"
          width="50%"
          PickerItemComponent={CategoryPickerItem}
          numberOfColumns={3}
        />

        <AppFormField<FormValues>
          name="description"
          placeholder="Description"
          maxLength={255}
          numberOfLines={3}
          multiline
        />

        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: { padding: 10 },
});

export default ListingEditScreen;

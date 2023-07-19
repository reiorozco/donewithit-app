import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import Screen from "../components/Screen";

import FormEditValues from "../interfaces/formEditValues";
import AppFormPicker from "../components/forms/AppFormPicker";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
});

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
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
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
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
        />

        <AppFormPicker<FormValues>
          items={categories}
          name="category"
          placeholder="Category"
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

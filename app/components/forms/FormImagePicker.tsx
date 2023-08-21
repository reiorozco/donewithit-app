import React from "react";
import { useFormikContext } from "formik";

import { ErrorMessage } from "./index";
import ImageInputList from "../ImageInputList";

interface Props<T> {
  name: keyof T;
}

function FormImagePicker<T>({ name }: Props<T>) {
  const { errors, setFieldValue, touched, values } = useFormikContext<T>();
  const imageUris = values[name] as string[];

  const handleAddImage = (imageUri: string | null) =>
    setFieldValue(name as string, [...imageUris, imageUri]);

  const handleRemoveImage = (imageUri: string | null) =>
    setFieldValue(
      name as string,
      imageUris.filter((uri) => uri !== imageUri)
    );

  return (
    <>
      <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAddImage}
        onRemoveImage={handleRemoveImage}
      />

      <ErrorMessage
        error={errors[name] as string | undefined}
        visible={touched[name] as boolean | undefined}
      />
    </>
  );
}

export default FormImagePicker;

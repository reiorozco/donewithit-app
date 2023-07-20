import React from "react";
import { useFormikContext } from "formik";

import AppPicker from "../AppPicker";
import ErrorMessage from "./ErrorMessage";

import Item from "../../interfaces/item";

interface Props<T> {
  items: Item[];
  name: keyof T;
  placeholder: string;
  width?: number | string;
}

function AppFormPicker<T>({ items, name, width, placeholder }: Props<T>) {
  const { errors, setFieldValue, touched, values } = useFormikContext<T>();

  return (
    <>
      <AppPicker
        items={items}
        onSelectItem={(item) => setFieldValue(name as string, item)}
        placeholder={placeholder}
        selectedItem={values[name] as Item}
        width={width}
      />

      <ErrorMessage
        error={errors[name] as string | undefined}
        visible={touched[name] as boolean | undefined}
      />
    </>
  );
}

export default AppFormPicker;

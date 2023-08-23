import React, { ReactNode } from "react";
import { useFormikContext } from "formik";

import AppPicker from "../AppPicker";
import ErrorMessage from "./ErrorMessage";

import Item from "../../interfaces/item";

interface Props<T> {
  items: Item[];
  name: keyof T;
  placeholder: string;
  numberOfColumns?: number;
  PickerItemComponent?: Function;
  width?: number | string;
}

function AppFormPicker<T>({
  items,
  name,
  PickerItemComponent,
  placeholder,
  width,
  numberOfColumns,
}: Props<T>) {
  const { errors, setFieldValue, touched, values } = useFormikContext<T>();

  return (
    <>
      <AppPicker
        items={items}
        onSelectItem={(item) => setFieldValue(name as string, item)}
        placeholder={placeholder}
        selectedItem={values[name] as Item}
        width={width}
        PickerItemComponent={PickerItemComponent}
        numberOfColumns={numberOfColumns}
      />

      <ErrorMessage
        error={errors[name] as string | undefined}
        visible={touched[name] as boolean | undefined}
      />
    </>
  );
}

export default AppFormPicker;

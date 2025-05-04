import React from "react";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

import ErrorMessage from "./ErrorMessage";
import AppPicker, { AppPickerProps, Item } from "@/components/AppPicker";

interface Props<T extends FieldValues> extends AppPickerProps {
  control: Control<T, any, T>;
  name: Path<T>;
  items: Item[];
}

function AppFormPicker<T extends FieldValues>({
  control,
  name,
  items,
  ...otherProps
}: Props<T>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error },
      }) => (
        <>
          <AppPicker
            onSelectItem={(item) => onChange(item.value)}
            selectedItem={items.find((i) => i.value === value)}
            items={items}
            {...otherProps}
          />

          <ErrorMessage error={error?.message} />
        </>
      )}
    />
  );
}

export default AppFormPicker;

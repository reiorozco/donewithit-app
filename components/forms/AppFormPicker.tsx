import React from "react";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

import ErrorMessage from "./ErrorMessage";
import AppPicker, { AppPickerProps, Item } from "@/components/AppPicker";

interface Props<T extends FieldValues> extends AppPickerProps {
  control: Control<T, any, T>;
  items: Item[];
  name: Path<T>;
}

function AppFormPicker<T extends FieldValues>({
  control,
  items,
  name,
  ...otherProps
}: Props<T>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <>
          <AppPicker
            items={items}
            onSelectItem={(item) => onChange(item.value)}
            selectedItem={items.find((i) => i.value === value)}
            {...otherProps}
          />

          <ErrorMessage error={error?.message} />
        </>
      )}
    />
  );
}

export default AppFormPicker;

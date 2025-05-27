import React from "react";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

import AppPicker, { AppPickerProps } from "@/components/AppPicker";
import { Item } from "@/components/PickerItem";
import ErrorMessage from "./ErrorMessage";

interface Props<T extends FieldValues> extends AppPickerProps {
  control: Control<T, any, T>;
  items: Item[];
  name: Path<T>;
  numColumns?: number;
}

function AppFormPicker<T extends FieldValues>({
  control,
  items,
  name,
  numColumns,
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
            numColumns={numColumns}
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

import React from "react";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

import AppTextInput, { AppTextInputProps } from "@/components/AppTextInput";
import ErrorMessage from "@/components/ErrorMessage";

interface Props<T extends FieldValues> extends AppTextInputProps {
  control: Control<T, any, T>;
  name: Path<T>;
}

function AppFormField<T extends FieldValues>({
  control,
  name,
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
          <AppTextInput
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            {...otherProps}
          />

          <ErrorMessage error={error?.message} />
        </>
      )}
    />
  );
}

export default AppFormField;

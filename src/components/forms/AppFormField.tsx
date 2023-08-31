import React from "react";
import { useFormikContext } from "formik";
import { NativeSyntheticEvent, TextInputFocusEventData } from "react-native";

import AppTextInput, { AppTextInputProps } from "../AppTextInput";
import ErrorMessage from "./ErrorMessage";

interface Props<T> extends AppTextInputProps {
  name: keyof T;
  width?: string | number;
}

function AppFormField<T>({ name, width, ...textInputProps }: Props<T>) {
  const { handleChange, handleBlur, touched, errors, setFieldValue, values } =
    useFormikContext<T>();

  return (
    <>
      <AppTextInput
        onBlur={
          handleBlur(name) as
            | ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void)
            | undefined
        }
        onChangeText={(text) => setFieldValue(name as string, text)}
        value={values[name] as string | undefined}
        width={width}
        {...textInputProps}
      />

      <ErrorMessage
        error={errors[name] as string | undefined}
        visible={touched[name] as boolean | undefined}
      />
    </>
  );
}

export default AppFormField;

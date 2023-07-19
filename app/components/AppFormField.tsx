import React from "react";
import { useFormikContext } from "formik";

import AppTextInput, { AppTextInputProps } from "./AppTextInput";
import ErrorMessage from "./ErrorMessage";

import FormValues from "../interfaces/formValues";

interface Props extends AppTextInputProps {
  name: keyof FormValues;
}

function AppFormField({ name, ...textInputProps }: Props) {
  const { handleChange, handleBlur, touched, errors } =
    useFormikContext<FormValues>();

  return (
    <>
      <AppTextInput
        onBlur={handleBlur(name)}
        onChangeText={handleChange(name)}
        {...textInputProps}
      />

      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormField;

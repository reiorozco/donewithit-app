import React from "react";
import { useFormikContext } from "formik";

import AppButton from "../AppButton";

import FormValues from "../../interfaces/formValues";

interface Props {
  title: string;
}

function SubmitButton({ title }: Props) {
  const { handleSubmit } = useFormikContext<FormValues>();

  return <AppButton title={title} onPress={handleSubmit} />;
}

export default SubmitButton;

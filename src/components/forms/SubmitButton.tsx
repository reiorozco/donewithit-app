import React from "react";
import { useFormikContext } from "formik";

import AppButton from "../AppButton";

import FormLoginValues from "../../interfaces/formLoginValues";

interface Props {
  title: string;
  color?: "primary" | "secondary";
}

function SubmitButton({ title, color }: Props) {
  const { handleSubmit } = useFormikContext<FormLoginValues>();

  return <AppButton title={title} onPress={handleSubmit} color={color} />;
}

export default SubmitButton;

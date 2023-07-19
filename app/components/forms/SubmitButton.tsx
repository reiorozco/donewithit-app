import React from "react";
import { useFormikContext } from "formik";

import AppButton from "../AppButton";

import FormLoginValues from "../../interfaces/formLoginValues";

interface Props {
  title: string;
}

function SubmitButton({ title }: Props) {
  const { handleSubmit } = useFormikContext<FormLoginValues>();

  return <AppButton title={title} onPress={handleSubmit} />;
}

export default SubmitButton;

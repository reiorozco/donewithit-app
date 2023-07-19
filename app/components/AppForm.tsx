import React, { ReactNode } from "react";
import { Formik, FormikHelpers } from "formik";
import { ObjectSchema } from "yup";

import FormValues from "../interfaces/formValues";

interface Props {
  initialValues: FormValues;
  validationSchema?: ObjectSchema<any>;
  onSubmit: (
    values: FormValues,
    formikHelpers: FormikHelpers<FormValues>
  ) => void | Promise<any>;
  children: ReactNode;
}

function AppForm({
  children,
  initialValues,
  onSubmit,
  validationSchema,
}: Props) {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {() => <>{children}</>}
    </Formik>
  );
}

export default AppForm;

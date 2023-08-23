import React, { ReactNode } from "react";
import { Formik, FormikHelpers, FormikValues } from "formik";
import { ObjectSchema } from "yup";

interface Props<T> {
  initialValues: T;
  validationSchema?: ObjectSchema<any>;
  onSubmit: (values: T, formikHelpers: FormikHelpers<T>) => void | Promise<any>;
  children: ReactNode;
}

function AppForm<T extends FormikValues>({
  children,
  initialValues,
  onSubmit,
  validationSchema,
}: Props<T>) {
  return (
    <Formik<T>
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {() => <>{children}</>}
    </Formik>
  );
}

export default AppForm;

import React, { useState } from "react";
import { Image, StyleSheet } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import Screen from "./Screen";
import AppButton from "./AppButton";
import AppFormField from "./AppFormField";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo.png")} />

      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));

            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          setFieldTouched,
          /* and other goodies */
        }) => {
          console.log("touched", touched);
          console.log(errors);

          return (
            <>
              <AppFormField
                autoCapitalize="none"
                autoCorrect={false}
                icon="email"
                keyboardType="email-address"
                name="email"
                placeholder="Email"
                textContentType="emailAddress"
              />

              <AppFormField
                autoCapitalize="none"
                autoCorrect={false}
                icon="lock"
                name="password"
                placeholder="Password"
                textContentType="password"
                secureTextEntry
              />

              <AppButton title="Login" onPress={handleSubmit} />
            </>
          );
        }}
      </Formik>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    alignSelf: "center",
    height: 80,
    marginBottom: 20,
    marginTop: 50,
    width: 80,
  },
});

export default LoginScreen;
